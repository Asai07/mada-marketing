'use client';
import React, { useEffect, useRef } from 'react'; // Quitamos useState para el scroll
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const Manifesto = React.forwardRef(({ isMobile, onOpenManifesto }, ref) => {
    // Referencia directa al elemento H2 para manipularlo sin re-renders
    const titleRef = useRef(null);

    useEffect(() => {
        // Si es móvil, no hacemos nada para ahorrar batería y CPU
        if (isMobile) return;

        const handleScroll = () => {
            if (!titleRef.current) return;

            // Calculamos posición relativa
            const scrolled = window.scrollY;
            const windowHeight = window.innerHeight;

            // Lógica de movimiento:
            // Solo calculamos si estamos cerca de la sección (Opcional, pero recomendado)
            // Aquí aplicamos tu lógica original: (scrolled - windowHeight * 1.5) * 0.1
            const offset = Math.min(0, (scrolled - windowHeight * 1.5) * 0.1);

            // MANIPULACIÓN DIRECTA DEL DOM (Zero React Renders)
            // Usamos translate3d para forzar aceleración de hardware
            titleRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Limpieza
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

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

                    {/* COLUMNA DERECHA */}
                    <div className="md:col-span-8 flex flex-col gap-16 md:gap-20">

                        {/* Título con efecto Parallax Optimizado */}
                        <div className="relative">
                            <h2
                                ref={titleRef} // <--- ASIGNAMOS LA REF AQUÍ
                                className="text-4xl sm:text-6xl md:text-8xl font-display font-black uppercase leading-[0.9] will-change-transform"
                            // Quitamos el style inline dinámico de React
                            >
                                <span className="text-transparent stroke-text-black">No solo hacemos</span> <br />
                                <span className="text-black-600">Sitios Web.</span>
                            </h2>
                        </div>

                        {/* Imagen */}
                        <ScrollReveal width="100%" y={50}>
                            <div className="relative w-full aspect-video overflow-hidden rounded-sm bg-gray-200">
                                <Image
                                    src="/manifesto.webp"
                                    alt="Team working"
                                    fill
                                    priority={true}
                                    className="object-cover"
                                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 850px"
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