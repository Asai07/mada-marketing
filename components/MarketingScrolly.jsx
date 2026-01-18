'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Target, Megaphone, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link'; // Importante: Añadimos Link

const MarketingScrolly = () => {
    const [activeService, setActiveService] = useState(0);
    const containerRef = useRef(null);

    const services = [
        {
            id: '01',
            title: "Tráfico y Publicidad",
            description: "Tener una web sin visitas es como tener una tienda en el desierto. Traemos clientes listos para comprar usando Google y Redes Sociales desde el primer día.",
            tags: ["Google Ads", "Facebook & Instagram", "Tráfico Calificado"],
            icon: Target
        },
        {
            id: '02',
            title: "Anuncios que Venden",
            description: "Nadie lee anuncios aburridos. Creamos videos e imágenes diseñados psicológicamente para que la gente deje de bajar el scroll y haga clic en tu oferta.",
            tags: ["Videos Virales", "Diseño Persuasivo", "Guiones de Venta"],
            icon: Megaphone
        },
        {
            id: '03',
            title: "Estrategia y Escalamiento",
            description: "Dejamos de adivinar. Medimos cada peso invertido para saber qué funciona. Optimizamos tu embudo para que cada vez te cueste menos conseguir un cliente nuevo.",
            tags: ["Analítica de Datos", "Retorno de Inversión", "Mejora de Ventas"],
            icon: TrendingUp
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const sections = containerRef.current.querySelectorAll('.service-block');

            sections.forEach((section, index) => {
                const { top, bottom } = section.getBoundingClientRect();
                if (top < window.innerHeight / 1.5 && bottom > window.innerHeight / 3) {
                    setActiveService(index);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={containerRef} className="relative bg-[#050505] text-white py-20 md:py-40">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-24">

                {/* --- IZQUIERDA: Título Sticky y Visuales --- */}
                <div className="hidden md:block sticky top-32 h-[60vh]">
                    <div className="h-full flex flex-col justify-between relative">
                        <div>
                            <span className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-4 block">
                                // 03. El Motor
                            </span>
                            <h2 className="text-7xl font-display font-bold leading-none mb-6">
                                MÁQUINA<br />DE <span className="text-lime-400">VENTAS.</span>
                            </h2>
                            <p className="text-gray-400 max-w-sm text-sm">
                                Ya tienes el sitio web. Ahora necesitas llenarlo de clientes comprando todos los días.
                            </p>
                        </div>

                        {/* Visuales Abstractos (Sin cambios) */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64">
                            {/* Visual 1: Traffic */}
                            <div className={`absolute inset-0 transition-all duration-700 ${activeService === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                <div className="absolute inset-0 border border-lime-400/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                <div className="absolute inset-4 border border-lime-400/40 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Target className="w-16 h-16 text-lime-400" />
                                </div>
                            </div>

                            {/* Visual 2: Creatives */}
                            <div className={`absolute inset-0 transition-all duration-700 flex items-center justify-center ${activeService === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                <div className="absolute inset-0 bg-lime-400/5 rounded-full animate-pulse"></div>
                                <Megaphone className="w-16 h-16 text-lime-400 relative z-10 rotate-[-15deg]" />
                            </div>

                            {/* Visual 3: Strategy */}
                            <div className={`absolute inset-0 transition-all duration-700 ${activeService === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/10 to-transparent rounded-lg transform rotate-6 border border-white/5"></div>
                                <div className="absolute inset-0 bg-[#0a0a0a] rounded-lg border border-white/20 flex items-center justify-center overflow-hidden">
                                    <TrendingUp className="w-20 h-20 text-lime-400 mb-2" />
                                </div>
                            </div>
                        </div>

                        <div className="font-mono text-sm text-gray-500">
                            0{activeService + 1} — 03
                        </div>
                    </div>
                </div>

                {/* --- DERECHA: Contenido Scrolleable --- */}
                <div className="flex flex-col pb-20 md:pb-0">
                    {/* Título Móvil */}
                    <div className="md:hidden mb-16">
                        <span className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-2 block">// 03. El Motor</span>
                        <h2 className="text-5xl font-display font-bold leading-none">MÁQUINA<br />DE VENTAS.</h2>
                    </div>

                    <div className="flex flex-col gap-32">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`service-block min-h-[50vh] flex flex-col justify-center transition-all duration-500 ${activeService === index ? 'opacity-100' : 'opacity-30 blur-sm'}`}
                            >
                                <span className="text-8xl font-display font-black text-white/5 md:text-white/10 mb-[-40px] z-0 select-none">
                                    {service.id}
                                </span>
                                <div className="relative z-10 pl-4 border-l-2 border-lime-400/50">
                                    <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">{service.title}</h3>
                                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-md mb-8">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono uppercase tracking-wider text-lime-400/80 bg-lime-400/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* --- BOTÓN DISCRETO AL FINAL DEL SCROLL --- */}
                        <div className="mt-12 pl-4">
                            <Link
                                href="/servicios/marketing-digital"
                                className="inline-flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-colors group"
                            >
                                <span className="text-sm font-bold uppercase tracking-widest border-b border-transparent group-hover:border-lime-400 pb-1">
                                    Ver Servicio Completo
                                </span>
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingScrolly;