'use client';
import React, { createContext, useContext, useState } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
    const [theme, setTheme] = useState({ bg: "#050505", text: "#ffffff" });
    const [cursorVariant, setCursorVariant] = useState("default");

    return (
        <UIContext.Provider value={{ theme, setTheme, cursorVariant, setCursorVariant }}>
            <LazyMotion features={domAnimation}>
                {children}
            </LazyMotion>
        </UIContext.Provider>
    );
};

export const useUI = () => useContext(UIContext);