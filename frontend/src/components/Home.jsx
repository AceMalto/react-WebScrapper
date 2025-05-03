import React, { useState } from 'react';

const Home = ({ darkMode }) => {
    const [url, setUrl] = useState('')
    const [format, setFormat] = useState(null)

    const handleScrape = async () => {
        if (!url) return alert("Please enter a URL to scrape");

        try {
            const res = await fetch("http://localhost:5000/scrape", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            });
            const data = await res.json();
            alert(`Scraped ${data.count} items successfully!`);
        } catch (err) {
            alert("Scrape failed: " + err.message);
        }
    };

    const handleDownload = () => {
        if (!format) return alert('Please select csv or json format')
        window.location.href = `http://localhost:5000/export/${format}`
    }
    return (
        <div className='flex flex-col items-center space-y-2 justify-center px-10 h-screen dark:bg-[#393E46] dark:text-[#00FFF5]'>
            <div className='flex space-x-1'>
                <input type="text" className='pl-5 outline-none text-white dark:text-black dark:bg-white bg-[#393E46] py-2 w-80 md:w-96'
                value={url}
                onChange={(e) => setUrl(e.target.value)}/>
                <button onClick={handleScrape} className='px-10 py-2 bg-[#00FFF5] text-[#00ADB5]'>scrape</button>
            </div>
            <div className='flex justify-center items-center space-x-2'>
                <button onClick={() => setFormat('csv')} className='px-14 py-2 bg-[#00FFF5] text-[#00ADB5]'>CSV</button>
                <button onClick={() => setFormat('json')} className='px-14 py-2 bg-[#00FFF5] text-[#00ADB5]'>JSON</button>
            </div>
            <div>
                <button onClick={handleDownload} className='px-20 py-2 bg-[#00FFF5] text-[#00ADB5]'>DOWNLOAD</button>
            </div>
        </div>
    );
};

export default Home;
