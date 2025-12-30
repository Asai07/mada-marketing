'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

// Importante: Usamos forwardRef para que el cambio de color funcione
const Hero = React.forwardRef(({ onOpenBooking }, props, ref) => {
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
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#050505] px-4 md:px-0">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#050505] z-20" />
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105 animate-[subtleZoom_20s_infinite_alternate]"
                >
                    <source src="https://res.cloudinary.com/dluvyfeyi/video/upload/v1735526012/10828680-uhd_3840_2160_24fps_g1m3up.mp4" type="video/mp4" />
                </video>
            </div>

            {/* CAMBIO 1: Agregamos '-mt-16 md:mt-0'. 
               Esto sube todo el bloque de texto 4rem (64px) hacia arriba en móvil, 
               quitando el aire superior, y lo regresa a su posición normal en escritorio.
            */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-7xl mx-auto text-center -mt-16 md:mt-0">

                {/* CAMBIO 2: Reducimos el margen inferior en móvil de 'mb-4' a 'mb-2' */}
                <h2 className="text-sm md:text-base uppercase tracking-[0.2em] text-gray-400 mb-2 md:mb-6 animate-[slideDownFade_1s_ease-out_0.2s_forwards] opacity-0">
                    Agencia digital global independiente
                </h2>

                <div ref={headingRef} className="relative perspective-text p-2 md:p-4 perspective-1000">
                    <h1 className="text-[13vw] md:text-[11vw] font-display font-bold leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 animate-[slideUpFade_1s_ease-out_0.4s_forwards] opacity-0 transition-transform duration-200 ease-out hover:scale-[1.02]">
                        {/* Título ELEVAMOS TU MARCA... se mantiene igual */}
                        <span className="block animate-[textReveal_1s_cubic-bezier(0.77,0,0.175,1)_0.2s_forwards] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70 relative z-10 mix-blend-difference">ELEVAMOS</span>
                        <span className="block text-lime-400 relative z-10 mix-blend-overlay animate-[textReveal_1s_cubic-bezier(0.77,0,0.175,1)_0.4s_forwards]">TU MARCA</span>
                        <span className="block animate-[textReveal_1s_cubic-bezier(0.77,0,0.175,1)_0.6s_forwards] bg-clip-text text-transparent bg-gradient-to-b from-white/90 via-white/80 to-white/60 relative z-10 mix-blend-difference">AL SIGUIENTE NIVEL</span>
                        <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/10 via-transparent to-purple-500/10 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
                    </h1>
                </div>

                {/* CAMBIO 3: Reducimos el margen inferior en móvil de 'mb-8' a 'mb-6' */}
                <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto mb-6 md:mb-10 animate-[slideUpFade_1s_ease-out_0.6s_forwards] opacity-0 px-4 md:px-0 leading-relaxed">
                    Creamos experiencias digitales que conectan marcas con personas a través de estrategia, diseño y tecnología.
                </p>

                {/* CAMBIO 4: Reducimos el margen superior del botón en móvil de 'mt-8' a 'mt-6' */}
                <div className="mt-6 md:mt-8 animate-[slideUpFade_1s_ease-out_0.8s_forwards] opacity-0">
                    <button
                        onClick={onOpenBooking}
                        aria-label="Agendar llamada"
                        className="group relative px-8 py-4 bg-transparent border border-white text-white uppercase font-bold tracking-widest text-sm overflow-hidden transition-all hover:border-lime-400 hover:text-black"
                    >
                        <span className="relative z-10 flex items-center gap-2">Agendar Llamada <ArrowRight className="w-4 h-4" /></span>
                        <div className="absolute inset-0 bg-lime-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    </button>
                </div>
            </div>
        </section>
    );
});

export default Hero;