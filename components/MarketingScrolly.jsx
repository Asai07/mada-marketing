'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Target, MessageCircle, BarChart3, ArrowUpRight } from 'lucide-react';

const MarketingRedesigned = () => {
    const [activeService, setActiveService] = useState(0);
    const containerRef = useRef(null);

    const services = [
        {
            id: '01',
            title: "Lead Gen",
            description: "Los likes alimentan el ego, las ventas alimentan el negocio. Diseñamos embudos automatizados que convierten curiosos en clientes.",
            tags: ["Sales Funnels", "Paid Media", "Automation"]
        },
        {
            id: '02',
            title: "Content",
            description: "No es publicar por publicar. Es psicología aplicada. Creamos narrativas que educan, entretienen y persuaden basándonos en datos.",
            tags: ["Strategy", "Video Production", "Copywriting"]
        },
        {
            id: '03',
            title: "Strategy",
            description: "Tu socio de crecimiento. Auditamos tu marca, desbloqueamos cuellos de botella y diseñamos la hoja de ruta para escalar.",
            tags: ["Consulting", "Brand Audit", "Scaling"]
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const sections = containerRef.current.querySelectorAll('.service-block');

            sections.forEach((section, index) => {
                const { top, bottom } = section.getBoundingClientRect();
                // Ajuste relativo al viewport
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

                {/* Left: Sticky Title & Visuals */}
                <div className="hidden md:block sticky top-32 h-[60vh]">
                    <div className="h-full flex flex-col justify-between relative">
                        <div>
                            <span className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-4 block">// Services</span>
                            <h2 className="text-7xl font-display font-bold leading-none mb-6">
                                GROWTH<br />ENGINE<span className="text-lime-400">.</span>
                            </h2>
                        </div>

                        {/* Abstract Visual Representation */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64">
                            {/* Visual 1: Radar/Target */}
                            <div className={`absolute inset-0 transition-all duration-700 ${activeService === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                <div className="absolute inset-0 border border-lime-400/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                <div className="absolute inset-4 border border-lime-400/40 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Target className="w-16 h-16 text-lime-400" />
                                </div>
                            </div>

                            <div className={`absolute inset-0 transition-all duration-700 ${activeService === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                <div className="flex gap-2 justify-center items-end h-32">
                                    {[45, 70, 90, 60, 50].map((height, i) => (
                                        <div
                                            key={i}
                                            className="w-4 bg-lime-400/80 rounded-t-lg animate-pulse"
                                            style={{
                                                height: `${height}%`,
                                                animationDelay: `${i * 0.1}s`
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>

                            {/* Visual 3: Strategy/Chart */}
                            <div className={`absolute inset-0 transition-all duration-700 ${activeService === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/20 to-transparent rounded-lg transform rotate-6 border border-white/10"></div>
                                <div className="absolute inset-0 bg-[#0a0a0a] rounded-lg border border-white/20 flex items-center justify-center">
                                    <ArrowUpRight className="w-24 h-24 text-lime-400" />
                                </div>
                            </div>
                        </div>

                        <div className="font-mono text-sm text-gray-500">
                            0{activeService + 1} — 03
                        </div>
                    </div>
                </div>

                {/* Right: Scrolling Content */}
                <div className="flex flex-col gap-32 pb-20 md:pb-0">
                    {/* Mobile Title */}
                    <div className="md:hidden mb-10">
                        <span className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-2 block">// Services</span>
                        <h2 className="text-5xl font-display font-bold leading-none">GROWTH<br />ENGINE.</h2>
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

export default MarketingRedesigned;