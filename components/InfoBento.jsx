'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Code, Globe, ArrowRight, Box, Layers } from 'lucide-react';

const InfoBento = ({ isMobile }) => {
    const bentoRef = useRef(null);
    const [bentoMouse, setBentoMouse] = useState({ x: 0, y: 0 });
    const [performanceCount, setPerformanceCount] = useState(0);
    const [hasViewed, setHasViewed] = useState(false); // Para activar el contador solo una vez

    // 1. Lógica para el seguimiento del mouse
    const handleBentoMouseMove = (e) => {
        if (!bentoRef.current || isMobile) return;

        const rect = bentoRef.current.getBoundingClientRect();
        setBentoMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    // 2. Lógica para animar el contador de 0 a 100
    useEffect(() => {
        // Usamos un observer para iniciar el contador solo cuando la sección es visible
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasViewed) {
                    setHasViewed(true);

                    // Iniciar animación del contador
                    let start = 0;
                    const end = 100;
                    const duration = 1500; // Duración en ms
                    const incrementTime = duration / end;

                    const timer = setInterval(() => {
                        start += 1;
                        setPerformanceCount(start);
                        if (start === end) clearInterval(timer);
                    }, incrementTime);
                }
            },
            { threshold: 0.3 } // Se activa cuando el 30% del componente es visible
        );

        if (bentoRef.current) {
            observer.observe(bentoRef.current);
        }

        return () => observer.disconnect();
    }, [hasViewed]);

    return (
        <section
            ref={bentoRef}
            onMouseMove={handleBentoMouseMove}
            className="py-20 md:py-32 px-6 bg-white text-black relative overflow-hidden"
        >
            {/* Animated Background - GREEN SCANLINES */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'repeating-linear-gradient(to right, #bef264, #bef264 1px, transparent 1px, transparent 40px)',
                    backgroundSize: '100% 100%'
                }}>
                <div className="absolute inset-0 animate-scanlines" style={{
                    background: 'linear-gradient(to bottom, transparent, #bef264 50%, transparent)',
                    opacity: 0.2,
                    backgroundSize: '100% 200%'
                }}></div>
            </div>

            {/* Mouse Follower Glow */}
            <div
                className="absolute z-0 pointer-events-none transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${bentoMouse.x}px ${bentoMouse.y}px, rgba(0,0,0,0.06), transparent 40%)`,
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    opacity: isMobile ? 0 : 1
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-12">
                    <span className="inline-block px-3 py-1 rounded-full border border-black/10 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 bg-gray-100">03. The Stack</span>
                    <h2 className="font-display text-4xl md:text-6xl font-bold">Sin Límites Técnicos</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 h-auto md:h-[600px]">

                    {/* CARD 1: FULL STACK */}
                    <div
                        className="col-span-1 md:col-span-2 md:row-span-2 text-white p-8 rounded-2xl flex flex-col justify-between group overflow-hidden relative"
                        style={{
                            backgroundSize: '200% 200%',
                            backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #000000 50%, #1e293b 100%)',
                        }}
                    >
                        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-[100px] animate-pulse"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-white/10 rounded-xl inline-block mb-6 backdrop-blur-sm border border-white/5">
                                    <Code className="w-8 h-8 text-lime-400" />
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-display font-bold mb-2">Full Stack</h3>
                            <p className="text-gray-400 mt-2 max-w-sm text-sm md:text-base leading-relaxed">
                                No usamos plantillas. Construimos arquitecturas escalables a medida.
                            </p>
                        </div>

                        <div className="flex gap-2 flex-wrap mt-8 relative z-10">
                            {['React', 'NextJS', 'TypeScript', 'Node', 'AWS', 'Shopify'].map((tag, i) => (
                                <span key={tag} className="border border-white/20 px-3 py-1 rounded-full text-xs font-mono hover:bg-white hover:text-black transition-all cursor-default" style={{ transitionDelay: `${i * 50}ms` }}>{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* CARD 2: PERFORMANCE */}
                    <div className="bg-[#f3f4f6] p-8 rounded-2xl flex flex-col justify-center items-center text-center group hover:shadow-xl transition-all duration-500 relative overflow-hidden border border-transparent hover:border-black/5">
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="flex items-baseline justify-center">
                                <h4 className="text-6xl md:text-7xl font-display font-bold mb-2 tracking-tighter">{performanceCount}</h4>
                                <span className="text-2xl font-bold">%</span>
                            </div>
                            <p className="text-xs uppercase tracking-widest font-bold text-gray-500">Google Lighthouse Score</p>
                            <div className="w-full bg-gray-300 h-1 mt-4 rounded-full overflow-hidden">
                                <div className="bg-lime-500 h-full transition-all duration-1000 ease-out" style={{ width: `${performanceCount}%` }}></div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3: SEO */}
                    <div className="bg-[#f3f4f6] p-8 rounded-2xl flex flex-col justify-between group overflow-hidden relative hover:bg-black hover:text-white transition-colors duration-500">
                        <div className="flex justify-between items-start">
                            <Globe className="w-8 h-8 mb-4 group-hover:text-lime-400 transition-colors" />
                            <ArrowRight className="w-6 h-6 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-xl font-display font-bold">SEO Nativo</h4>
                            <p className="text-xs text-gray-500 group-hover:text-gray-400 mt-1 transition-colors">Estructura semántica perfecta. Google te amará.</p>
                        </div>
                    </div>

                    {/* CARD 4: DESIGN SYSTEMS */}
                    <div className="col-span-1 md:col-span-2 bg-[#f3f4f6] p-8 rounded-2xl flex items-center justify-between relative overflow-hidden group">
                        <div className="relative z-10 flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <Box className="w-6 h-6 text-purple-600" />
                                <Layers className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-display font-bold">Design Systems</h3>
                            <p className="text-sm text-gray-500 max-w-[250px] mt-2 group-hover:text-black transition-colors">
                                Creamos un lenguaje visual consistente. Componentes reutilizables, no parches.
                            </p>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-[60px] opacity-30 group-hover:opacity-60 group-hover:scale-125 transition-all duration-700"></div>
                        <div className="relative z-10 border border-black/10 bg-white/50 backdrop-blur-md p-4 rounded-xl shadow-sm group-hover:translate-y-[-5px] transition-transform duration-500">
                            <div className="flex gap-2 mb-2">
                                <div className="w-8 h-8 rounded-full bg-black"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                <div className="w-8 h-8 rounded-full bg-lime-400"></div>
                            </div>
                            <div className="h-2 w-20 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoBento;