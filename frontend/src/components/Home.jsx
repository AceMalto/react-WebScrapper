import React from 'react';

const Home = ({ darkMode }) => {
    return (
        <div className='flex flex-col items-center space-y-2 justify-center px-10 h-screen dark:bg-[#393E46] dark:text-[#00FFF5]'>
            <div className='flex space-x-1'>
                <input type="text" className='pl-5 outline-none text-white dark:text-black dark:bg-white bg-[#393E46] py-2 w-80 md:w-96' />
                <button className='px-10 py-2 bg-[#00FFF5] text-[#00ADB5]'>scrape</button>
            </div>
            <div className='flex justify-center items-center space-x-2'>
                <button className='px-14 py-2 bg-[#00FFF5] text-[#00ADB5]'>CSV</button>
                <button className='px-14 py-2 bg-[#00FFF5] text-[#00ADB5]'>JSON</button>
            </div>
            <div>
                <button className='px-20 py-2 bg-[#00FFF5] text-[#00ADB5]'>DOWNLOAD</button>
            </div>
        </div>
    );
};

export default Home;
