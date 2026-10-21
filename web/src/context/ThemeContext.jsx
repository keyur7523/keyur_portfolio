import { createContext, useContext, useState, useLayoutEffect } from 'react';
import { flushSync } from 'react-dom';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // Light-first: light unless the user chose dark.
        // v3 key — the redesign resets earlier saved choices once.
        const saved = localStorage.getItem('theme-v3');
        return saved === 'dark' ? 'dark' : 'light';
    });

    useLayoutEffect(() => {
        const root = document.documentElement;

        // Remove both classes first
        root.classList.remove('light', 'dark');
        // Add the current theme class
        root.classList.add(theme);

        // Save to localStorage
        localStorage.setItem('theme-v3', theme);
    }, [theme]);

    const toggleTheme = () => {
        const flip = () => flushSync(() => setTheme(prev => prev === 'light' ? 'dark' : 'light'));
        // Cross-fade instead of a hard dark↔light brightness jump; older browsers just switch
        if (document.startViewTransition) document.startViewTransition(flip);
        else flip();
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components -- provider + hook belong together
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
