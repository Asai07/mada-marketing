'use client';
import React from 'react';
import Image from 'next/image'; // <--- 1. Importamos Image
import { useScroll } from '../hooks/useScroll';

const Work = React.forwardRef(({ isMobile }, ref) => {
    const scrolled = useScroll();

    // Calculamos un valor seguro para evitar errores si window no está definido
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    return (
        <section ref={ref} className="py-20 md:py-32 px-6 relative overflow-hidden text-black">

            <div className="hidden md:block absolute top-20 right-20 text-9xl font-display font-bold text-black opacity-5 pointer-events-none select-none animate-float">WORK</div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20">
                    <h2 className="text-5xl md:text-8xl font-display font-bold text-black leading-[0.8]">CASOS<br /><span className="ml-2 md:ml-32 opacity-50">REALES</span></h2>
                    <a href="#" className="mt-8 md:mt-0 flex items-center gap-2 font-body font-bold text-black uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity text-sm md:text-base">Ver todo el portafolio</a>
                </div>

                <div className="flex flex-col gap-20 md:gap-30">

                    {/* Project 1 */}
                    <div className="group grid md:grid-cols-2 gap-8 md:gap-10 items-center">
                        {/* Contenedor de imagen */}
                        <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-2xl">
                            {/* --- CAMBIO AQUÍ --- */}
                            <Image
                                src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2564&auto=format&fit=crop"
                                alt="Vogue X Street Project"
                                fill // Ocupa todo el contenedor 'aspect-[4/3]'
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw" // Móvil: 100% ancho, Desktop: 50% ancho
                            />
                            {/* ------------------- */}
                        </div>
                        <div
                            className="md:-ml-20 z-10 p-6 md:p-12 bg-black text-white rounded-lg shadow-xl transition-transform duration-75 ease-linear"
                            style={{
                                transform: !isMobile ? `translateY(${(scrolled * 0.05) - 100}px)` : 'none'
                            }}
                        >
                            <span className="text-lime-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 block">Fashion & E-commerce</span>
                            <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">VOGUE X STREET</h3>
                            <p className="text-gray-400 font-body text-sm md:text-base mb-6 md:mb-8">Rediseño completo de la experiencia de compra para la marca de streetwear más grande de LATAM.</p>
                            <ul className="flex flex-wrap gap-2 md:gap-4 text-xs font-mono text-gray-500">
                                <li className="border border-white/20 px-2 py-1 rounded">UX/UI</li>
                                <li className="border border-white/20 px-2 py-1 rounded">Shopify Plus</li>
                                <li className="border border-white/20 px-2 py-1 rounded">3D Configurator</li>
                            </ul>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group grid md:grid-cols-2 gap-8 md:gap-10 items-center">
                        <div
                            className="order-2 md:order-1 md:-mr-20 z-10 p-6 md:p-12 bg-white text-black rounded-lg shadow-xl transition-transform duration-75 ease-linear"
                            style={{
                                transform: !isMobile ? `translateY(${scrolled * -0.02 + 50}px)` : 'none'
                            }}
                        >
                            <span className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 block">Fintech & App</span>
                            <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">NEOBANK PRIME</h3>
                            <p className="text-gray-600 font-body text-sm md:text-base mb-6 md:mb-8">Una aplicación bancaria que la gente realmente quiere usar. Animaciones fluidas, seguridad biométrica.</p>
                            <ul className="flex flex-wrap gap-2 md:gap-4 text-xs font-mono text-gray-400">
                                <li className="border border-black/10 px-2 py-1 rounded">Mobile App</li>
                                <li className="border border-black/10 px-2 py-1 rounded">React Native</li>
                            </ul>
                        </div>
                        {/* Contenedor de imagen */}
                        <div className="order-1 md:order-2 relative overflow-hidden rounded-xl aspect-[4/3] shadow-2xl">
                            {/* --- CAMBIO AQUÍ --- */}
                            <Image
                                src="https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=687&auto=format&fit=crop"
                                alt="Neobank Prime Project"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* ------------------- */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
});

Work.displayName = 'Work';

export default Work;