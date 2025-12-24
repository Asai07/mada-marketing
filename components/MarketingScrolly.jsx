'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Target, Megaphone, TrendingUp, ArrowUpRight } from 'lucide-react'; // Cambié algunos iconos

const MarketingScrolly = () => {
    const [activeService, setActiveService] = useState(0);
    const containerRef = useRef(null);

    // CAMBIO CLAVE: Estos servicios son puramente de CRECIMIENTO (Post-Lanzamiento Web)
    const services = [
        {
            id: '01',
            title: "Traffic Acquisition",
            description: "Una web increíble sin visitas es un desierto. Gestionamos campañas agresivas en Meta Ads y Google Ads para inyectar tráfico cualificado desde el día uno.",
            tags: ["Paid Media", "Google Ads", "Social Ads"],
            icon: Target
        },
        {
            id: '02',
            title: "Performance Creative",
            description: "El diseño bonito no siempre vende. Creamos piezas publicitarias (video/estáticas) diseñadas psicológicamente para detener el scroll y generar clics.",
            tags: ["Ad Creatives", "UGC", "Copywriting"],
            icon: Megaphone
        },
        {
            id: '03',
            title: "Growth Strategy",
            description: "Dejamos de adivinar. Analizamos métricas, optimizamos embudos y escalamos lo que funciona. Tu socio de crecimiento basado en datos, no en intuición.",
            tags: ["Data Analytics", "CRO", "Scaling"],
            icon: TrendingUp
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const sections = containerRef.current.querySelectorAll('.service-block');

            sections.forEach((section, index) => {
                const { top, bottom } = section.getBoundingClientRect();
                // Ajuste para detectar qué sección está activa en pantalla
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
                                // 03. The Fuel
                            </span>
                            <h2 className="text-7xl font-display font-bold leading-none mb-6">
                                GROWTH<br />SYSTEM<span className="text-lime-400">.</span>
                            </h2>
                            <p className="text-gray-400 max-w-sm text-sm">
                                Ya tienes la nave. Ahora necesitas el combustible para despegar.
                            </p>
                        </div>

                        {/* --- Representaciones Visuales Abstractas --- */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64">

                            {/* Visual 1: Traffic (Radar) */}
                            <div className={`absolute inset-0 transition-all duration-700 ${activeService === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                <div className="absolute inset-0 border border-lime-400/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                <div className="absolute inset-4 border border-lime-400/40 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Target className="w-16 h-16 text-lime-400" />
                                </div>
                                {/* Partículas orbitando */}
                                <div className="absolute top-0 left-1/2 w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_10px_#a3e635] animate-ping"></div>
                            </div>

                            {/* Visual 2: Creatives (Ondas/Voz) */}
                            <div className={`absolute inset-0 transition-all duration-700 flex items-center justify-center ${activeService === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                <div className="absolute inset-0 bg-lime-400/5 rounded-full animate-pulse"></div>
                                <Megaphone className="w-16 h-16 text-lime-400 relative z-10 rotate-[-15deg]" />
                                {/* Ondas de sonido simuladas */}
                                <div className="absolute right-0 top-10 w-8 h-1 bg-lime-400/50 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
                                <div className="absolute right-[-10px] top-4 w-12 h-1 bg-lime-400/30 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
                            </div>

                            {/* Visual 3: Strategy (Gráfica Ascendente) */}
                            <div className={`absolute inset-0 transition-all duration-700 ${activeService === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/10 to-transparent rounded-lg transform rotate-6 border border-white/5"></div>
                                <div className="absolute inset-0 bg-[#0a0a0a] rounded-lg border border-white/20 flex items-center justify-center overflow-hidden">
                                    <TrendingUp className="w-20 h-20 text-lime-400 mb-2" />
                                    {/* Grid de fondo */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="font-mono text-sm text-gray-500">
                            0{activeService + 1} — 03
                        </div>
                    </div>
                </div>

                {/* --- DERECHA: Contenido Scrolleable --- */}
                <div className="flex flex-col gap-32 pb-20 md:pb-0">
                    {/* Título visible solo en Móvil */}
                    <div className="md:hidden mb-10">
                        <span className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-2 block">// 03. The Fuel</span>
                        <h2 className="text-5xl font-display font-bold leading-none">GROWTH<br />SYSTEM.</h2>
                    </div>

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
                </div>
            </div>
        </section>
    );
};

export default MarketingScrolly;