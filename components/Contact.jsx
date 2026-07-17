import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Si tienes un hook de cursor, impórtalo aquí. Ejemplo:
// import { useCursor } from '../context/CursorContext';

const Contact = () => {
    const ctaRef = useRef(null);

    // --- MANEJO DEL CURSOR ---
    // Si no tienes un contexto global de cursor, estas funciones evitan que la app se rompa.
    // Si ya tienes un hook (ej. useCursor), sustituye esto por: const { textEnter, textLeave, buttonEnter } = useCursor();
    const textEnter = () => { };
    const textLeave = () => { };
    const buttonEnter = () => { };
    const handleWhatsApp = () => {
        const phone = "528100000000"; // Tu número
        const message = encodeURIComponent("Hola MADA, tengo un proyecto en mente y quisiera platicar detalles.");
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    };

    const containerRef = useRef(null);

    // Scroll progress relative to this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    // Smooth color transitions from black to green
    const bgColor = useTransform(scrollYProgress, [0, 0.8], ["#050505", "#a3e635"]); // Black to Lime-400
    const txtColor = useTransform(scrollYProgress, [0, 0.8], ["#ffffff", "#000000"]); // White to Black
    const strokeColor = useTransform(scrollYProgress, [0, 0.8], ["1px white", "1px black"]);
    
    // Additional elements that need contrast changes
    const accentBg = useTransform(scrollYProgress, [0, 0.8], ["rgba(0,0,0,0)", "#000000"]); // Transparent to Black
    const accentText = useTransform(scrollYProgress, [0, 0.8], ["#a3e635", "#a3e635"]); // Always Lime
    const pColor = useTransform(scrollYProgress, [0, 0.8], ["#9ca3af", "#1f2937"]); // Gray-400 to Gray-800
    const btnBg = useTransform(scrollYProgress, [0, 0.8], ["#ffffff", "#000000"]); // Button White to Black
    const btnText = useTransform(scrollYProgress, [0, 0.8], ["#000000", "#a3e635"]); // Button Text Black to Lime

    return (
        <motion.section 
            ref={containerRef} 
            style={{ backgroundColor: bgColor, color: txtColor }}
            className="py-32 md:py-48 px-6 flex flex-col justify-center items-center text-center relative overflow-hidden"
        >
            {/* Background noise for texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/noise.svg')]"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.span 
                    style={{ backgroundColor: accentBg, color: accentText }}
                    className="font-body text-xs md:text-sm uppercase tracking-[0.2em] inline-block mb-6 animate-pulse px-4 py-1.5 rounded-full"
                >
                    // 05. Contacto
                </motion.span>

                <h2 className="font-display text-5xl md:text-8xl font-bold mb-8 leading-tight">
                    ¿Tienes un <br />
                    <motion.span
                        className="text-transparent hover:text-current transition-colors duration-700 cursor-none"
                        style={{ WebkitTextStroke: strokeColor }} 
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                    >
                        Proyecto?
                    </motion.span>
                </h2>

                <motion.p 
                    style={{ color: pColor }}
                    className="font-body text-lg md:text-3xl max-w-2xl mx-auto mb-16 leading-relaxed font-light"
                >
                    Hacemos tus ideas más <motion.span style={{ backgroundColor: accentBg, color: accentText }} className="italic font-serif px-2 py-0.5 rounded-md mx-1">caóticas</motion.span> e interesantes realidad.
                </motion.p>

                <motion.button
                    onClick={handleWhatsApp}
                    onMouseEnter={buttonEnter}
                    onMouseLeave={textLeave}
                    style={{ backgroundColor: btnBg, color: btnText }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-12 py-5 font-bold uppercase tracking-widest text-sm overflow-hidden rounded-full shadow-2xl flex items-center justify-center mx-auto"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        Contáctanos <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </motion.button>
            </div>
        </motion.section>
    );
};

export default Contact;