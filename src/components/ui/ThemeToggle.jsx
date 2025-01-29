import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {

        // CHECK TO SEE IF THERE IS ALREADY A THEME SET IN LOCAL STORAGE - DEFAULT TO LIGHT
        const savedTheme = localStorage.getItem('theme');
        return savedTheme && typeof savedTheme === 'string' ? savedTheme : 'light';
    });


    useEffect(() => {
        const body = document.body;

        if (theme === 'dark') {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
        // SAVE THE USER'S PREFERENCE IN LOCAL STORAGE
        if (typeof theme === 'string') {
            localStorage.setItem('theme', theme);
        }
    }, [theme]);


    const toggleTheme = () => {
        // TOGGLE LIGHT & DARK THEME
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="px-2 py-2 md:px-3 md:py-3 text-foreground border-[1.5px] border-foreground rounded-lg"
        >
            {theme === 'light' ? <MoonIcon className="size-4"/> : <SunIcon className="size-4"/>}
        </button>
    );
};

export default ThemeToggle;
