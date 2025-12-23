import React, { useEffect } from 'react';
import { useUI } from '../context/UIContext';
import { useInView } from 'react-intersection-observer';

const SectionWrapper = ({ children, bg, text, className }) => {
    const { setTheme } = useUI();

    // Observa cuando la sección está en el centro del viewport
    const { ref, inView } = useInView({
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
    });

    useEffect(() => {
        if (inView) {
            setTheme({ bg, text });
        }
    }, [inView, bg, text, setTheme]);

    return (
        <div ref={ref} className={className}>
            {/* 
                display: contents → NO genera caja
                Esto es lo que permite que sticky funcione
            */}
            <div className="contents">
                {children}
            </div>
        </div>
    );
};

export default SectionWrapper;
