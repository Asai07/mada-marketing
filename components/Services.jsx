'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const services = [
    {
        id: "01",
        title: "Art Direction",
        category: "Design",
        text: "Sistemas de diseño, UI Kits y Branding Digital. No solo decoramos, creamos lenguajes visuales escalables.",
        img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Interactive Web",
        category: "Development",
        text: "WebGL, Three.js y Framer Motion. Sitios que reaccionan al usuario. Tu web no solo se lee, se siente.",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Engineering",
        category: "Tech",
        text: "Next.js, Arquitectura Serverless y CMS Headless. Código robusto optimizado para un rendimiento de 100/100.",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "04",
        title: "E-Commerce",
        category: "Business",
        text: "Desarrollo Shopify avanzado y pasarelas a medida. Convertimos visitas en transacciones sin fricción.",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2670&auto=format&fit=crop"
    }
];

// --- 1. Componente Tarjeta (Adaptado para ambos entornos) ---
const Card = ({ service, isMobile }) => {
    return (
        <div
            className={`
                relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col 
                group transition-colors hover:border-lime-400/50
                /* Dimensiones Móvil vs Desktop */
                ${isMobile ? 'w-[85vw] h-[65vh] snap-center shrink-0' : 'w-[60vw] h-[70vh] md:flex-row'}
            `}
        >
            {/* Imagen: En móvil arriba (45%), en desktop izquierda (50%) */}
            <div className={`relative overflow-hidden ${isMobile ? 'h-[45%] w-full' : 'h-1/2 md:h-full md:w-1/2'}`}>
                <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Contenido */}
            <div className={`relative flex flex-col justify-between bg-[#0a0a0a] ${isMobile ? 'h-[55%] p-6' : 'h-1/2 md:h-full md:w-1/2 p-6 md:p-12'}`}>
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-lime-400 font-mono text-xs md:text-sm">/{service.id}</span>
                        <h3 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 leading-tight uppercase">
                            {service.title}
                        </h3>
                    </div>
                    {/* Botón más pequeño en móvil */}
                    <div className="p-2 md:p-3 rounded-full border border-white/10 text-white group-hover:bg-lime-400 group-hover:text-black group-hover:border-lime-400 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                </div>

                <div className="mt-4 md:mt-0">
                    <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-[10px] md:text-xs text-gray-400 mb-4 uppercase tracking-wider">
                        {service.category}
                    </span>
                    <p className="text-gray-400 text-sm md:text-lg leading-relaxed border-l-2 border-lime-400/30 pl-4">
                        {service.text}
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
            </div>
        </div>
    );
};

// --- 2. Sub-componente Desktop (Scroll Jacking con Framer Motion) ---
const DesktopServices = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0.1, 0.9], ["50%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#0a0a0a]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                {/* Título Flotante */}
                <div className="absolute top-12 left-12 z-20">
                    <span className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-2 block">
                        // 02. Capabilities
                    </span>
                    <h2 className="text-4xl font-display font-bold text-white uppercase leading-none mix-blend-difference">
                        Digital Craft
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-12 pl-[10vw]">
                    {services.map((service) => (
                        <div key={service.id} className="flex-shrink-0">
                            <Card service={service} isMobile={false} />
                        </div>
                    ))}
                </motion.div>

                {/* Barra de progreso */}
                <div className="absolute bottom-12 left-12 right-12 h-[1px] bg-white/10 z-20">
                    <motion.div
                        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                        className="h-full bg-lime-400 w-full"
                    />
                </div>
            </div>
        </section>
    );
};

// --- 3. Sub-componente Móvil (Native Horizontal Snap Scroll) ---
const MobileServices = () => {
    return (
        <section className="py-20 bg-[#0a0a0a] overflow-hidden">
            <div className="px-6 mb-8">
                <span className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-4 block">
                    // 02. Capabilities
                </span>
                <h2 className="text-5xl font-display font-bold text-white uppercase leading-[0.9]">
                    Digital<br />Craft
                </h2>
                <p className="text-gray-500 text-xs mt-2 animate-pulse">Desliza para explorar →</p>
            </div>

            {/* Contenedor con Scroll Horizontal Nativo + Snap */}
            {/* 'no-scrollbar' es una clase utilidad, si no la tienes, el scrollbar se verá un poco */}
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-8 w-full scrollbar-hide">
                {services.map((service) => (
                    <Card key={service.id} service={service} isMobile={true} />
                ))}

                {/* Espaciador final para que la última tarjeta no quede pegada al borde */}
                <div className="w-6 shrink-0" />
            </div>
        </section>
    );
};

// --- 4. Componente Principal ---
const Services = React.forwardRef(({ isMobile }, ref) => {
    return (
        <div ref={ref}>
            {isMobile ? <MobileServices /> : <DesktopServices />}
        </div>
    );
});

Services.displayName = "Services";
export default Services;