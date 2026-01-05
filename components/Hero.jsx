'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

// Importante: Usamos forwardRef para que el cambio de color funcione
const Hero = React.forwardRef(({ onOpenBooking }, ref) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(80);
    const toRotate = [
        "IMPACTO",
        "ALCANCE",
        "VALOR",
        "ESTÁNDAR",
        "PRESTIGIO",
        "NIVEL",
        "ESENCIA",
        "MARCA",
    ];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % toRotate.length;
            const fullText = toRotate[i];
            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
            let typeSpeed = 80;
            if (isDeleting) typeSpeed = 40;
            if (!isDeleting && text === fullText) { typeSpeed = 1000; setIsDeleting(true); }
            else if (isDeleting && text === '') { setIsDeleting(false); setLoopNum(loopNum + 1); typeSpeed = 300; }
            setTypingSpeed(typeSpeed);
        };
        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-10">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-[#4a044e] via-[#172554] to-[#052e16] animate-gradient-xy opacity-90"></div>
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('/noise.svg')]"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto pt-20 flex flex-col justify-center h-full">
                <h1 className="sr-only">
                    MADA: Agencia de Desarrollo Web y Marketing Digital en Monterrey. Elevamos tu marca.
                </h1>

                <div className="flex flex-col md:flex-row items-end justify-between border-b border-white/20 pb-8 mb-8 md:mb-16">
                    <p className="font-body text-[10px] md:text-sm uppercase tracking-[0.2em] text-lime-400 max-w-[200px]">Agencia de Desarrollo Web<br />Global Independiente</p>
                    <p className="hidden md:block font-body text-xs text-right text-gray-400">Est. 2025 — Worldwide</p>
                </div>

                {/* --- CAMBIO SEO 2: TU TÍTULO ANIMADO AHORA ES UN DIV (Visual) --- */}
                {/* Cambié la etiqueta <h1...> por <div...> y agregué aria-hidden="true" para que los lectores de pantalla ignoren este texto incompleto y lean solo el H1 de arriba */}
                <div aria-hidden="true" className="font-display text-5xl sm:text-6xl md:text-[7rem] leading-[0.9] font-bold uppercase mix-blend-overlay text-white break-words">
                    <span className="block overflow-hidden"><span className="block animate-[slideUpFade_1s_ease-out_forwards]">Elevamos</span></span>
                    <span className="block overflow-hidden"><span className="block animate-[slideUpFade_1s_ease-out_0.2s_forwards] text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-lime-500">Tu </span></span>
                    <span className="block overflow-hidden relative min-h-[1.1em] text-white">
                        <span>{text}</span>
                        <span className="inline-block w-[3px] h-[0.8em] bg-lime-400 ml-2 animate-blink align-middle"></span>
                    </span>
                </div>

                <div className="mt-8 animate-[slideUpFade_1s_ease-out_0.6s_forwards] opacity-0">
                    <button onClick={onOpenBooking} aria-label="Agendar llamada" className="group relative px-8 py-4 bg-transparent border border-white text-white uppercase font-bold tracking-widest text-sm overflow-hidden transition-all hover:border-lime-400 hover:text-black">
                        <span className="relative z-10 flex items-center gap-2">Agendar Llamada <ArrowRight className="w-4 h-4" /></span>
                        <div className="absolute inset-0 bg-lime-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    </button>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end mt-12 md:mt-24 gap-8">
                    <div className="flex flex-col items-start gap-6 animate-[fadeIn_1s_ease-out_1s_forwards] opacity-0 w-full md:w-auto">
                        <div onClick={() => window.scrollTo(0, window.innerHeight)} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-lime-400 hover:border-lime-400 hover:text-black transition-all group">
                            <ArrowDown className="w-4 h-4 group-hover:animate-bounce" />
                        </div>
                        <span className="text-[10px] md:text-xs uppercase tracking-widest">Scroll to Explore</span>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto animate-[fadeIn_1s_ease-out_0.8s_forwards] opacity-0">
                        <p className="max-w-md text-gray-400 font-body text-base md:text-lg leading-relaxed text-left md:text-right">
                            Creamos experiencias web que no solo se ven bien, sino que sienten. Diseño sensorial para marcas valientes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Hero;