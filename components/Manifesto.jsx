'use client';
import React, { useState, useEffect } from 'react';
import { useScroll } from '../hooks/useScroll';

const Manifesto = React.forwardRef(({ isMobile, onOpenManifesto }, ref) => {
    const scrolled = useScroll();

    // 1. NUEVO: Estado para saber si ya estamos en el cliente (navegador)
    const [isMounted, setIsMounted] = useState(false);

    // 2. NUEVO: Al cargar el componente, confirmamos que está montado
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Calculamos un valor seguro para evitar errores si window no está definido
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    return (
        <section ref={ref} className="py-20 md:py-32 px-6 relative overflow-hidden text-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4 md:sticky md:top-32 h-fit">
                        <span className="inline-block px-3 py-1 rounded-full border border-black/10 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 bg-gray-100 text-black">01. The Insight</span>
                        <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">El diseño estático está muerto.</h3>
                        <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed mb-8">Hoy en día, la atención es la moneda más valiosa. Si tu sitio web no cuenta una historia, si no se mueve, si no respira... es invisible.</p>
                        <button onClick={onOpenManifesto} className="px-8 py-3 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-lime-400 hover:text-black transition-colors">Leer Manifiesto</button>
                    </div>
                    <div className="md:col-span-8 flex flex-col gap-16 md:gap-20">
                        <div className="relative">
                            <h2
                                className="text-4xl sm:text-6xl md:text-8xl font-display font-black uppercase leading-[0.9] transition-transform duration-100 ease-linear"
                                style={{
                                    // 3. CAMBIO CRÍTICO: Solo aplicamos el transform si 'isMounted' es true.
                                    // Si no está montado (SSR), no aplicamos transformación ('none').
                                    transform: (isMounted && !isMobile)
                                        ? `translateX(${Math.min(0, (scrolled - windowHeight * 1.5) * 0.1)}px)`
                                        : 'none'
                                }}
                            >
                                No hacemos <br /><span className="text-transparent stroke-text-black hover:text-lime-500 transition-colors">Sitios Web.</span>
                            </h2>
                        </div>
                        <div className="relative w-full aspect-video overflow-hidden rounded-sm">
                            <img src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2670&auto=format&fit=crop" alt="Team working" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                        <p className="font-display text-2xl md:text-5xl font-bold leading-tight text-gray-800">Creamos ecosistemas <span className="italic font-serif font-light text-gray-400">digitales</span> que conectan emociones con resultados de negocio.</p>
                    </div>
                </div>
            </div>
        </section>
    );
});

// Es buena práctica añadir displayName cuando usas forwardRef
Manifesto.displayName = 'Manifesto';

export default Manifesto;