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
        img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

// --- COMPONENTE TARJETA INDIVIDUAL ---
const Card = ({ i, title, text, img, category, id, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    // Efectos de escala
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{
                    scale,
                    backgroundColor: '#111111',
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className="relative flex flex-col md:flex-row w-full md:w-[70vw] h-[65vh] md:h-[60vh] rounded-3xl border border-white/10 overflow-hidden shadow-2xl origin-top"
            >
                {/* --- COLUMNA IMAGEN (40% Desktop / 40% Mobile) --- */}
                <div className="relative w-full md:w-[40%] h-[40%] md:h-full overflow-hidden">
                    <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
                        <Image
                            fill
                            src={img}
                            alt={title}
                            className="object-cover"
                            sizes="(max-width: 768px) 90vw, 30vw"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </motion.div>
                </div>

                {/* --- COLUMNA TEXTO (60% Desktop / 60% Mobile) --- */}
                <div className="relative w-full md:w-[60%] h-[60%] md:h-full p-6 md:p-12 flex flex-col justify-between">

                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-lime-400 font-mono text-xs md:text-sm">/{id}</span>
                            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 leading-[0.9] uppercase">
                                {title}
                            </h3>
                        </div>
                        <div className="p-3 rounded-full border border-white/10 text-white hover:bg-lime-400 hover:text-black transition-colors cursor-pointer">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Body */}
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-[10px] md:text-xs text-gray-400 mb-4 uppercase tracking-wider">
                            {category}
                        </span>
                        <p className="text-gray-400 text-sm md:text-lg leading-relaxed border-l-2 border-lime-400/30 pl-4 max-w-md">
                            {text}
                        </p>
                    </div>

                    {/* Ruido de fondo sutil */}
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
                </div>
            </motion.div>
        </div>
    );
};

// --- COMPONENTE PRINCIPAL ---
const Services = React.forwardRef(({ isMobile }, ref) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section
            ref={ref}
            className="bg-[#050505] pt-20 md:pt-32 pb-32 overflow-x-clip" // Agregamos overflow-x-clip aquí
        >
            {/* TÍTULO FIJO (Sticky Header) */}
            <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-24">
                <span className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-4 block">
                    // 02. Capabilities
                </span>
                <h2 className="text-5xl md:text-8xl font-display font-bold text-white uppercase leading-[0.9]">
                    Digital<br />
                    <span className="text-transparent stroke-text-white">Architecture</span>
                </h2>
                <p className="text-gray-500 mt-6 max-w-md text-sm md:text-base">
                    Construimos activos digitales capa por capa. Desliza hacia abajo para deconstruir nuestro proceso.
                </p>
            </div>

            {/* CONTENEDOR DE TARJETAS */}
            {/* CORRECCIÓN: Agregamos max-w-7xl y px-6 aquí para restringir el ancho de las cards w-full */}
            <div ref={container} className="relative max-w-7xl mx-auto px-6">
                {services.map((service, i) => {
                    // Lógica de escalado para efecto stack
                    const targetScale = 1 - ((services.length - i) * 0.05);

                    return (
                        <Card
                            key={i}
                            i={i}
                            {...service}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
});

Services.displayName = "Services";
export default Services;