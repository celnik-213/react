import React from 'react';

const ThemeSwitcher = ({ theme, onThemeChange }) => {
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        onThemeChange(newTheme);
    };

    return (
        <button onClick={toggleTheme}>
            Zmień motyw na {theme === 'light' ? 'ciemny' : 'jasny'}
        </button>
    );
};

export default ThemeSwitcher;