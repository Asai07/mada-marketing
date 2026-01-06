'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- DATOS DE PROYECTOS ---
const projects = [
    {
        title: "VELVET",
        category: "Magazine & Culture",
        desc: "Plataforma editorial de diseño minimalista, enfocada en la experiencia de usuario y tendencias vanguardistas.",
        tags: ["UX/UI", "Autoadministrable", "React"],
        img: "/velvet.png",
        theme: "dark", // Tarjeta negra
        link: "https://velvet-magazine.vercel.app/"
    },
    {
        title: "Cotizador & Web de Carpintería",
        category: "Web & 3D",
        desc: "Ecosistema digital y configurador 3D interactivo para la visualización de mobiliario artesanal en tiempo real.",
        tags: ["ThreeJS", "WebGL", "React"],
        img: "/carpinteria.png",
        theme: "light", // Tarjeta blanca
        link: "https://cotizador-muebles.vercel.app/"
    }
];

// --- COMPONENTE DE TARJETA INDIVIDUAL ---
const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const isEven = index % 2 === 0;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <div ref={ref} className="group grid md:grid-cols-2 gap-8 md:gap-0 items-center relative">

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
                style={{ y }}
                className={`
                    relative z-10 p-6 md:p-12 rounded-lg shadow-xl transition-all duration-300 flex flex-col justify-center
                    ${project.theme === 'dark'
                        ? 'bg-[#0a0a0a] text-white'
                        : 'bg-white text-black border border-gray-100'
                    }
                    ${isEven
                        ? 'order-2 md:-ml-20'
                        : 'order-2 md:order-1 md:-mr-20 z-20'
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

                <ul className={`flex flex-wrap gap-2 md:gap-4 text-xs font-mono mb-8 
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

                {/* --- NUEVO BOTÓN: VER DEMO --- */}
                <div className={`pt-6 border-t ${project.theme === 'dark' ? 'border-white/10' : 'border-black/5'}`}>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all group/link
                            ${project.theme === 'dark' ? 'text-lime-400 hover:text-lime-300' : 'text-black hover:opacity-60'}`
                        }
                    >
                        Ver Demo en Vivo
                        {/* Flecha animada */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </a>
                </div>

            </motion.div>
        </div>
    );
};

// --- COMPONENTE PRINCIPAL ---
const Work = React.forwardRef(({ isMobile }, ref) => {
    return (
        <section id="proyectos" ref={ref} className="py-20 md:py-32 px-6 relative overflow-hidden text-black bg-[#bef264]">

            <div className="hidden md:block absolute top-20 right-20 text-[10rem] font-display font-bold text-black opacity-[0.03] pointer-events-none select-none">
                WORK
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-32">
                    <h2 className="text-5xl md:text-8xl font-display font-bold text-black leading-[0.8]">
                        CASOS<br />
                        <span className="ml-2 md:ml-32 opacity-50 stroke-text-black text-transparent">REALES</span>
                    </h2>

                    {/* --- ENLACE COMENTADO TEMPORALMENTE --- */}
                    {/* <a href="#" className="mt-8 md:mt-0 flex items-center gap-2 font-body font-bold text-black uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity text-sm md:text-base">
                        Ver Portafolio Completo
                    </a> 
                    */}
                </div>

                <div className="flex flex-col gap-20 md:gap-32">
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