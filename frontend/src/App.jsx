import React, { useState, useEffect } from 'react';
import Nav from './components/Navigation/Nav';
import Home from './components/Home';

const App = () => {
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
    <div className={darkMode ? 'dark' : ''}>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
    </div>
  );
};

export default App;
