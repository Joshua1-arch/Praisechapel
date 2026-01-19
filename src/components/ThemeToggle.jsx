import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all duration-300 ${theme === 'dark'
                    ? 'bg-zinc-800 text-yellow-400 hover:bg-zinc-700'
                    : 'bg-gray-100 text-orange-500 hover:bg-gray-200'
                }`}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};

export default ThemeToggle;
