'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Discovery & Estrategia",
        desc: "No diseñamos a ciegas. Analizamos tu competencia, definimos tu audiencia y creamos la arquitectura de información que guiará el proyecto.",
        icon: Search
    },
    {
        id: "02",
        title: "UI/UX Design",
        desc: "Creamos prototipos de alta fidelidad. Aquí es donde definimos la estética, la tipografía y cómo se sentirá la marca antes de escribir código.",
        icon: PenTool
    },
    {
        id: "03",
        title: "Desarrollo High-End",
        desc: "Traducimos el diseño a código limpio (Next.js). Animaciones fluidas, optimización SEO técnica y velocidad de carga instantánea.",
        icon: Code2
    },
    {
        id: "04",
        title: "Launch & Scale",
        desc: "Pruebas exhaustivas, despliegue en servidores globales y entrega de documentación. Tu activo digital está listo para recibir tráfico.",
        icon: Rocket
    }
];

const ProcessSection = () => {
    return (
        <section className="py-20 md:py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 md:text-center max-w-3xl mx-auto"
                >
                    <span className="text-lime-600 font-mono text-xs uppercase tracking-widest mb-4 block">
                        // The Workflow
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        De la Idea al Activo Digital.
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Un proceso lineal y transparente. Sin cajas negras ni tecnicismos innecesarios.
                    </p>
                </motion.div>

                {/* Steps Container */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
                    {/* Línea central decorativa (solo desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex items-center ${isEven ? 'md:justify-end md:pr-16 md:text-right' : 'md:justify-start md:col-start-2 md:pl-16 md:text-left'
                                    }`}
                            >
                                {/* Puntos centrales (solo desktop) */}
                                <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full items-center justify-center z-10 shadow-sm ${isEven ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}>
                                    <div className="w-2 h-2 bg-lime-500 rounded-full" />
                                </div>

                                {/* Card del paso */}
                                <div className="group bg-gray-50 hover:bg-white p-8 rounded-2xl border border-gray-100 hover:border-lime-500/50 hover:shadow-xl transition-all duration-300 w-full md:max-w-lg">
                                    <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-sm group-hover:scale-110 transition-transform">
                                            <step.icon className="w-6 h-6 text-black" />
                                        </div>
                                        <span className="font-mono text-4xl font-bold text-gray-200 group-hover:text-lime-500/50 transition-colors">
                                            {step.id}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;