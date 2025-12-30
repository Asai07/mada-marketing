'use client';
import React, { useState, useEffect } from 'react';
import { useScroll } from '../hooks/useScroll';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const Manifesto = React.forwardRef(({ isMobile, onOpenManifesto }, ref) => {
    const scrolled = useScroll();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    return (
        <section ref={ref} className="py-20 md:py-32 px-6 relative overflow-hidden text-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-12">
                    {/* COLUMNA IZQUIERDA (Texto sticky) */}
                    <div className="md:col-span-4 md:sticky md:top-32 h-fit">
                        <ScrollReveal>
                            <span className="inline-block px-3 py-1 rounded-full border border-black/10 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 bg-gray-100 text-black">
                                01. The Insight
                            </span>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
                                El diseño estático está muerto.
                            </h3>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                                Hoy en día, la atención es la moneda más valiosa. Si tu sitio web no cuenta una historia, si no se mueve, si no respira... es invisible.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <button
                                onClick={onOpenManifesto}
                                aria-label="Leer Manifesto"
                                className="px-8 py-3 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-lime-400 hover:text-black transition-colors"
                            >
                                Leer Manifiesto
                            </button>
                        </ScrollReveal>
                    </div>

                    {/* COLUMNA DERECHA (Imágenes y Título grande) */}
                    <div className="md:col-span-8 flex flex-col gap-16 md:gap-20">

                        {/* Título con efecto Parallax (Este no lleva ScrollReveal porque ya se mueve con el scroll) */}
                        <div className="relative">
                            <h2
                                className="text-4xl sm:text-6xl md:text-8xl font-display font-black uppercase leading-[0.9] transition-transform duration-100 ease-linear"
                                style={{
                                    transform: (isMounted && !isMobile)
                                        ? `translateX(${Math.min(0, (scrolled - windowHeight * 1.5) * 0.1)}px)`
                                        : 'none'
                                }}
                            >
                                <span className="text-transparent stroke-text-black">No solo hacemos</span> <br />
                                <span className="text-black-600">Sitios Web.</span>
                            </h2>
                        </div>

                        {/* Imagen grande apareciendo */}
                        <ScrollReveal width="100%" y={50}>
                            <div className="relative w-full aspect-video overflow-hidden rounded-sm">
                                <Image
                                    src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2670&auto=format&fit=crop"
                                    alt="Team working"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 850px"
                                />
                                <div className="absolute inset-0 bg-black/10"></div>
                            </div>
                        </ScrollReveal>

                        {/* Texto final */}
                        <ScrollReveal delay={0.2}>
                            <p className="font-display text-2xl md:text-5xl font-bold leading-tight text-gray-800">
                                Creamos ecosistemas <span className="italic font-serif font-light text-gray-400">digitales</span> que conectan emociones con resultados de negocio.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
});

Manifesto.displayName = 'Manifesto';
export default Manifesto;