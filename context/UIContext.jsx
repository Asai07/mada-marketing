'use client';
import React, { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
    const [theme, setTheme] = useState({ bg: "#050505", text: "#ffffff" });
    const [cursorVariant, setCursorVariant] = useState("default");

    return (
        <UIContext.Provider value={{ theme, setTheme, cursorVariant, setCursorVariant }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => useContext(UIContext);