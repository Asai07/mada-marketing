'use client';
import React, { useEffect, useRef } from 'react';
import { useUI } from '../context/UIContext';
import { useIsMobile } from '@/hooks/useIsMobile';

const CustomCursor = () => {
    const { cursorVariant } = useUI();
    const isMobile = useIsMobile();
    if (isMobile) {
        return null;
    }
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                // Mover el DOM directamente es mucho más rápido que React State para esto
                cursorRef.current.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
            }
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`hidden md:flex fixed top-0 left-0 w-6 h-6 bg-lime-400 rounded-full pointer-events-none z-[10000] mix-blend-difference transition-transform duration-100 ease-out items-center justify-center ${cursorVariant === 'text' ? 'scale-[5]' : ''}`}
        />
    );
};
export default CustomCursor;