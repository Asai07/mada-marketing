'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- DATOS DE PROYECTOS (Para mantener el código limpio) ---
const projects = [
    {
        title: "VOGUE X STREET",
        category: "Fashion & E-commerce",
        desc: "Rediseño completo de la experiencia de compra para la marca de streetwear más grande de LATAM.",
        tags: ["UX/UI", "Shopify Plus", "3D Configurator"],
        img: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2564&auto=format&fit=crop",
        theme: "dark" // Tarjeta negra
    },
    {
        title: "NEOBANK PRIME",
        category: "Fintech & App",
        desc: "Una aplicación bancaria que la gente realmente quiere usar. Animaciones fluidas, seguridad biométrica.",
        tags: ["Mobile App", "React Native", "Security"],
        img: "https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=687&auto=format&fit=crop",
        theme: "light" // Tarjeta blanca
    }
];

// --- COMPONENTE DE TARJETA INDIVIDUAL (Maneja su propio Parallax) ---
const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const isEven = index % 2 === 0;

    // Detectamos el progreso del scroll SOLO cuando esta tarjeta cruza la pantalla
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Mapeamos el scroll: Cuando entra, está abajo (50px), cuando sale, está arriba (-50px)
    // Esto crea un movimiento suave y controlado, no infinito.
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <div ref={ref} className="group grid md:grid-cols-2 gap-8 md:gap-0 items-center relative">
            {/* Nota: md:gap-0 porque usaremos márgenes negativos para el solapamiento */}

            {/* 1. IMAGEN */}
            <div className={`relative overflow-hidden rounded-xl aspect-[4/3] shadow-2xl w-full md:w-[110%] z-0 
                ${isEven ? 'order-1' : 'order-1 md:order-2 md:-ml-[10%]'}`
            }>
                <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* 2. TEXTO (CARD FLOTANTE) */}
            <motion.div
                style={{ y }} // APLICAMOS EL PARALLAX CONTROLADO AQUÍ
                className={`
                    relative z-10 p-6 md:p-12 rounded-lg shadow-xl transition-all duration-300
                    ${project.theme === 'dark'
                        ? 'bg-[#0a0a0a] text-white'
                        : 'bg-white text-black border border-gray-100'
                    }
                    ${isEven
                        ? 'order-2 md:-ml-20'  // Solapamiento a la izquierda
                        : 'order-2 md:order-1 md:-mr-20 z-20' // Solapamiento a la derecha
                    }
                `}
            >
                <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 block 
                    ${project.theme === 'dark' ? 'text-lime-400' : 'text-gray-500'}`
                }>
                    {project.category}
                </span>

                <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6 leading-tight">
                    {project.title}
                </h3>

                <p className={`font-body text-sm md:text-base mb-6 md:mb-8 leading-relaxed
                    ${project.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`
                }>
                    {project.desc}
                </p>

                <ul className={`flex flex-wrap gap-2 md:gap-4 text-xs font-mono 
                    ${project.theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`
                }>
                    {project.tags.map(tag => (
                        <li key={tag} className={`border px-2 py-1 rounded 
                            ${project.theme === 'dark' ? 'border-white/20' : 'border-black/10'}`
                        }>
                            {tag}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

// --- COMPONENTE PRINCIPAL ---
const Work = React.forwardRef(({ isMobile }, ref) => {
    return (
        <section ref={ref} className="py-20 md:py-32 px-6 relative overflow-hidden text-black bg-[#bef264]"> {/* Fondo Lima para contraste */}

            {/* Título decorativo flotante */}
            <div className="hidden md:block absolute top-20 right-20 text-[10rem] font-display font-bold text-black opacity-[0.03] pointer-events-none select-none">
                WORK
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-32">
                    <h2 className="text-5xl md:text-8xl font-display font-bold text-black leading-[0.8]">
                        CASOS<br />
                        <span className="ml-2 md:ml-32 opacity-50 stroke-text-black text-transparent">REALES</span>
                    </h2>
                    <a href="#" className="mt-8 md:mt-0 flex items-center gap-2 font-body font-bold text-black uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity text-sm md:text-base">
                        Ver Portafolio Completo
                    </a>
                </div>

                {/* Lista de Proyectos con gap razonable */}
                <div className="flex flex-col gap-20 md:gap-32"> {/* Gap normalizado (antes era 150) */}
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
});

Work.displayName = 'Work';
export default Work;