'use client';
import React, { useEffect, useRef } from 'react';
import { useUI } from '../context/UIContext';
import { useIsMobile } from '@/hooks/useIsMobile';

const CustomCursor = () => {
    // 1. PRIMERO: Declaramos TODOS los hooks (sin condiciones)
    const { cursorVariant } = useUI();
    const isMobile = useIsMobile();
    const cursorRef = useRef(null);

    // 2. Controlamos el efecto (para no gastar recursos en móvil)
    useEffect(() => {
        // Si es móvil, no agregamos el listener (ahorro de recursos)
        if (isMobile) return;

        const moveCursor = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
            }
        };

        window.addEventListener('mousemove', moveCursor);

        return () => window.removeEventListener('mousemove', moveCursor);
    }, [isMobile]); // Agregamos isMobile a las dependencias

    // 3. AHORA SÍ: El Early Return (después de los hooks)
    // Esto evita que se pinte el DIV en el HTML
    if (isMobile) {
        return null;
    }

    return (
        <div
            ref={cursorRef}
            className={`hidden md:flex fixed top-0 left-0 w-6 h-6 bg-lime-400 rounded-full pointer-events-none z-[10000] mix-blend-difference transition-transform duration-100 ease-out items-center justify-center ${cursorVariant === 'text' ? 'scale-[5]' : ''}`}
        />
    );
};

export default CustomCursor;