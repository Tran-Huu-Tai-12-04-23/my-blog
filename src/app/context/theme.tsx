// ThemeContext.js
'use client';
import React, { createContext, useContext, useState } from 'react';

export type ContextValue = {
    isDarkMode: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ContextValue | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = (props: { children: React.ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const theme = {
        isDarkMode,
        toggleTheme,
    };

    return <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>;
};
