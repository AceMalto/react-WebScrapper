import React, { useState, useEffect } from 'react';
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const Nav = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    const toggleDarkMode = () => {
        setDarkMode(prev => {
            const newMode = !prev;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <div className='border py-5 px-10 md:px-20 flex justify-between items-center bg-orange-400 dark:bg-gray-900 dark:text-white w-full'>
            <div>
                WS
            </div>
            <div>
                <button onClick={toggleDarkMode} className="text-xl">
                    {darkMode ? <FaRegSun /> : <FaRegMoon />}
                </button>
            </div>
        </div>
    );
};

export default Nav;
