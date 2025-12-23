import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
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

    return (
        <section ref={ctaRef} className="py-32 px-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* Background noise for texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <span className="text-lime-400 font-body text-xs md:text-sm uppercase tracking-[0.2em] block mb-6 animate-pulse">
                    04. Contacto
                </span>

                <h2 className="font-display text-5xl md:text-8xl font-bold mb-8 leading-tight text-white">
                    ¿Tienes un <br />
                    <span
                        className="text-transparent stroke-text-white hover:text-white transition-all duration-700 cursor-none"
                        style={{ WebkitTextStroke: '1px white' }} // Asegura el borde blanco si no tienes la clase en tailwind
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                    >
                        Proyecto?
                    </span>
                </h2>

                <p className="font-body text-gray-400 text-lg md:text-3xl max-w-2xl mx-auto mb-16 leading-relaxed font-light">
                    Hacemos tus ideas más <span className="text-lime-400 italic font-serif">caóticas</span> e interesantes realidad.
                </p>

                <button
                    onMouseEnter={buttonEnter}
                    onMouseLeave={textLeave}
                    className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:bg-lime-400 hover:scale-105 duration-300 rounded-sm"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        Contáctanos <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Contact;