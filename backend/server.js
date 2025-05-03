const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { Parser } = require('json2csv');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let scrapedData = [];

app.post('/scrape', async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'URL is required' });

    try {
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0'
            }
        });

        const $ = cheerio.load(data);
        scrapedData = [];

        // Scrape mixed general content
        $('p, h1, h2, h3, h4, h5, h6, a, img').each((i, el) => {
            const tag = $(el)[0].tagName;
            const text = $(el).text().trim();
            const href = $(el).attr('href') || null;
            const src = $(el).attr('src') || null;

            scrapedData.push({ tag, text, href, src });
        });

        // Get a random 50 items
        scrapedData = scrapedData.sort(() => 0.5 - Math.random()).slice(0, 50);

        res.json({ message: 'Scrape completed', count: scrapedData.length });
    } catch (err) {
        res.status(500).json({ error: 'Scrape failed', details: err.message });
    }
});

app.get('/export/:format', (req, res) => {
    const { format } = req.params;

    if (scrapedData.length === 0) {
        return res.status(400).json({ error: 'No data available to export. Please scrape first.' });
    }

    if (format === 'csv') {
        const parser = new Parser();
        const csv = parser.parse(scrapedData);
        res.setHeader('Content-Disposition', 'attachment; filename="scraped_data.csv"');
        res.setHeader('Content-Type', 'text/csv');
        res.send(csv);
    } else if (format === 'json') {
        res.setHeader('Content-Disposition', 'attachment; filename="scraped_data.json"');
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(scrapedData, null, 2));
    } else {
        res.status(400).json({ error: 'Invalid format. Use "csv" or "json".' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
