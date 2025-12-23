'use client';
// src/hooks/useScroll.js
import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // Definimos la función que actualiza el estado
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Agregamos el evento con { passive: true } para mejorar el rendimiento del navegador
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Limpiamos el evento cuando el componente se desmonta
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollY;
};