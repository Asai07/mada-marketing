'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// --- DATOS DE TUS PROYECTOS ---
const allProjects = [
    {
        id: 1,
        title: "La Prietilla Tacos",
        category: "Web",
        desc: "Diseño UX/UI y desarrollo para negocio de alimentos.",
        tags: ["Next.js", "Framer Motion", "Tailwind"],
        img: "/la-prietilla.png",
        link: "https://laprietillatacos.vercel.app/",
        year: "2025"
    },
    {
        id: 2,
        title: "Velvet",
        category: "App",
        desc: "Diseño UX/UI Editorial para revista, animaciones, artículos y blog funcional.",
        tags: ["React", "Framer-motion", "Tailwind"],
        img: "/velvet.png",
        link: "https://velvet-magazine.vercel.app/",
        year: "2026"
    },
    {
        id: 3,
        title: "MADA Agency",
        category: "Branding",
        desc: "Creación de identidad visual y sistema de diseño escalable.",
        tags: ["Figma", "Illustrator", "Branding"],
        img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
        link: "#",
        year: "2025"
    },
    {
        id: 4,
        title: "Neon Dashboard",
        category: "Web",
        desc: "Desarrollo de panel administrativo con modo oscuro nativo.",
        tags: ["React", "Chart.js", "SaaS"],
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
        link: "#",
        year: "2025"
    }
];

const categories = ["Todos", "Web", "App", "Branding"];

// --- TARJETA DE PROYECTO (CON WHATSAPP INTEGRADO) ---
const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });

    // 🟢 LÓGICA DE WHATSAPP AGREGADA AQUÍ
    const getWhatsAppLink = (projectTitle) => {
        const phone = "528180114561";
        const message = `Hola, me interesa cotizar una solución similar a: ${projectTitle}`;
        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            ref={cardRef}
            className="group flex flex-col gap-5 w-full"
        >
            {/* 1. Contenedor de Imagen */}
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-black shadow-2xl border border-black/10 group-hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] transition-shadow duration-500 block"
            >
                <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur text-black text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {project.year}
                </div>
            </a>

            {/* 2. Info del Proyecto */}
            <div className="flex flex-col gap-4 px-1">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-display font-bold text-black">
                            {project.title}
                        </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] font-mono font-bold uppercase tracking-wider border border-black/20 px-2 py-1 rounded text-black/60 bg-white/30">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-sm font-body text-black/80 leading-relaxed max-w-md">
                        {project.desc}
                    </p>
                </div>

                {/* 3. Botones de Acción */}
                <div className="flex items-center gap-3 mt-2">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 text-xs font-bold uppercase tracking-widest border border-black text-black rounded hover:bg-black hover:text-[#bef264] transition-colors"
                    >
                        Ver Demo
                    </a>

                    {/* 🟢 BOTÓN WHATSAPP INTEGRADO AL DISEÑO VERDE */}
                    <a
                        href={getWhatsAppLink(project.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 text-xs font-bold uppercase tracking-widest bg-black text-[#bef264] border border-black rounded hover:bg-black/80 transition-colors flex items-center gap-2"
                    >
                        <span>Cotizar solución similar</span>
                        {/* Mantuve la flecha original para no romper la estética, pero ya funciona el link */}
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

// --- COMPONENTE PRINCIPAL (FONDO VERDE) ---
const Work = React.forwardRef(({ isMobile }, ref) => {
    const [filter, setFilter] = useState("Todos");

    const filteredProjects = allProjects.filter(p =>
        filter === "Todos" ? true : p.category.includes(filter)
    );

    return (
        <section id="proyectos" ref={ref} className="py-24 md:py-40 px-6 relative bg-[#bef264] text-black overflow-hidden">

            <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.05]">
                <h1 className="text-[15vw] font-display font-bold leading-none whitespace-nowrap text-black select-none">
                    SELECTED WORK — SELECTED WORK
                </h1>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-6">
                            CASOS<br />
                            <span className="stroke-text-black text-transparent ml-12">REALES</span>
                        </h2>
                        <p className="max-w-md text-lg font-body text-black/70">
                            Resultados tangibles. Así es como ayudamos a nuestros clientes a destacar en su industria.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`
                                    px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide border transition-all duration-300
                                    ${filter === cat
                                        ? 'bg-black text-[#bef264] border-black scale-105'
                                        : 'bg-transparent text-black border-black/30 hover:border-black hover:bg-black/5'
                                    }
                                `}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-32 border-t border-black/10 w-full" />

            </div>
        </section>
    );
});

Work.displayName = 'Work';
export default Work;