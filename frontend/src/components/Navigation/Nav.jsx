import React from 'react';
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const Nav = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className='py-5 px-10 md:px-20 flex justify-between items-center bg-white dark:bg-[#222831] dark:text-[#00FFF5] w-full'>
            <div>WS</div>
            <div>
                <button onClick={toggleDarkMode} className="text-xl">
                {darkMode ? <FaRegMoon className='text-white'/> : <FaRegSun className='text-yellow-400'/>}
                </button>
            </div>
        </div>
    );
};

export default Nav;
