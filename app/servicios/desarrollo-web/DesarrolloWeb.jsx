'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Rocket, Zap, Database, Layout, Smartphone,
    ArrowRight, MessageCircle, CheckCircle2,
    ShieldCheck, Search, Code2, Globe, ExternalLink,
    Trophy, Play
} from 'lucide-react';
import Image from 'next/image';

// --- ANIMACIONES CONFIG ---
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const breathingBlob = {
    animate: {
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
};

export default function DesarrolloWebClient() {
    const [activePlan, setActivePlan] = useState('momentum');
    const PHONE_NUMBER = "528180114561";

    const projects = [
        {
            title: "Inmobiliaria Regia",
            category: "Real Estate",
            result: "+40% Leads",
            demoUrl: "#",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
        },
        {
            title: "Dr. Roberto M.",
            category: "Sector Salud",
            result: "Agenda Llena",
            demoUrl: "#",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
        },
        {
            title: "Muebles Design",
            category: "E-Commerce",
            result: "Ventas 24/7",
            demoUrl: "#",
            image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000&auto=format&fit=crop",
        }
    ];

    const plansInfo = {
        ignition: {
            title: "IGNITION",
            subtitle: "Validación Rápida",
            desc: "La herramienta perfecta para empezar. Te entregamos una Landing Page de alto impacto diseñada con un solo objetivo: convertir visitantes en clientes. Ideal para campañas de publicidad.",
            target: "Perfecto para: Lanzar un producto, Servicios Profesionales (Abogados, Dentistas) o Captación de Leads.",
            features: [
                "Landing Page (One-Pager)",
                "Carga Instantánea (< 1s)",
                "Botones de Conversión",
                "Formulario de Contacto"
            ],
            color: "text-gray-900",
            blobColor: "bg-gray-400",
            accent: "bg-gray-900",
            icon: <Rocket className="w-6 h-6" />
        },
        momentum: {
            title: "MOMENTUM",
            subtitle: "Crecimiento & Control",
            desc: "Tu negocio está creciendo. Este plan te da un Sitio Web Completo (Multi-sección) con un sistema integrado para que tú mismo edites textos y fotos sin saber programar.",
            target: "Perfecto para: PyMES establecidas, Consultorios, Catálogos de Productos y Posicionamiento SEO.",
            features: [
                "Sitio Web Completo (5 Secciones)",
                "Panel Autoadministrable (CMS)",
                "Blog o Noticias",
                "Optimización Google (SEO)"
            ],
            color: "text-lime-900",
            blobColor: "bg-lime-400",
            accent: "bg-lime-500",
            icon: <Zap className="w-6 h-6" />
        },
        singularity: {
            title: "SINGULARITY",
            subtitle: "Sin Límites",
            desc: "Cuando una plantilla no es suficiente. Desarrollamos plataformas web a la medida: Tiendas en línea complejas, áreas de miembros o integraciones con tu software.",
            target: "Perfecto para: Startups, E-commerce Avanzado, Marcas Nacionales y Proyectos Especiales.",
            features: [
                "Desarrollo 100% a Medida",
                "Tienda en Línea / Pagos",
                "Usuarios y Bases de Datos",
                "Conexiones API (CRM, ERP)"
            ],
            color: "text-purple-900",
            blobColor: "bg-purple-500",
            accent: "bg-purple-600",
            icon: <Database className="w-6 h-6" />
        }
    };

    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-black text-white selection:bg-lime-400 selection:text-black font-sans">

            {/* --- 1. HERO SECTION --- */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-6 pt-24 pb-12">
                <div className="absolute inset-0 bg-black"></div>

                <motion.div
                    variants={breathingBlob}
                    animate="animate"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-lime-500 rounded-full blur-[80px] md:blur-[150px] pointer-events-none mix-blend-screen opacity-20"
                />

                <div className="max-w-7xl mx-auto relative z-10 text-center w-full">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">

                        {/* TÍTULO SEGURO PARA MÓVIL:
                            - text-4xl en móvil: Asegura que "DESARROLLO" quepa sin romperse.
                            - sm:text-6xl y md:text-8xl: Crece mucho en pantallas grandes.
                            - Estructura limpia de 3 líneas para máximo impacto.
                        */}
                        <motion.h1
                            variants={fadeInUp}
                            className="font-display font-black uppercase leading-tight mb-8 text-white tracking-tight w-full"
                        >
                            <span className="block text-4xl sm:text-6xl md:text-8xl">
                                Agencia de
                            </span>
                            <span className="block text-3xl sm:text-6xl md:text-8xl text-transparent stroke-text-white opacity-90">
                                Desarrollo
                            </span>
                            <span className="block text-4xl sm:text-6xl md:text-8xl text-transparent stroke-text-white opacity-90">
                                Web.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 font-light px-2"
                        >
                            Código que genera valor. Transformamos la complejidad técnica en activos digitales rentables, rápidos y seguros.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#motor"
                                className="px-10 py-4 bg-lime-400 text-black font-bold rounded-full hover:bg-lime-300 hover:scale-105 transition-all shadow-[0_0_30px_rgba(163,230,53,0.3)] text-base"
                            >
                                Ver Planes
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- 2. NUESTRO ADN --- */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
                className="py-20 px-6 border-t border-gray-900 bg-zinc-950"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 uppercase">Nuestro ADN <span className="text-lime-400">.</span></h2>
                        <p className="text-gray-400 text-lg max-w-xl">
                            Stack tecnológico de nivel empresarial. Sin constructores visuales lentos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Globe className="w-8 h-8 text-white" />, title: "Next.js 14", desc: "Velocidad híbrida imposible de igualar por WordPress.", tag: "Core" },
                            { icon: <Database className="w-8 h-8 text-lime-400" />, title: "Serverless", desc: "Infraestructura que escala automáticamente.", tag: "Infra" },
                            { icon: <Layout className="w-8 h-8 text-purple-400" />, title: "UI Modular", desc: "Consistencia visual y diseño atómico.", tag: "Design" },
                            { icon: <Smartphone className="w-8 h-8 text-blue-400" />, title: "PWA Ready", desc: "Comportamiento de app nativa en celular.", tag: "Mobile" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="group p-8 rounded-2xl bg-black border border-gray-800 hover:border-lime-400/30 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-gray-900 rounded-lg group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <span className="text-[10px] font-mono border border-gray-800 px-2 py-1 rounded text-gray-500 uppercase">{item.tag}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* --- 3. EL ESTÁNDAR MADA --- */}
            <motion.section
                id="el-estandar"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
                className="py-20 md:py-32 px-6 bg-white text-black"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="w-full">
                            <span className="text-lime-600 font-bold text-xs uppercase tracking-widest mb-2 block">
                                La base de todo proyecto
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-black uppercase leading-tight mb-6 w-full">
                                El <span className="text-lime-500">Estándar.</span>
                            </h2>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            No importa el plan. Todos nuestros sitios salen a producción con los estándares de calidad más altos de la industria.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "SEO Técnico", desc: "Metadatos, sitemap y estructura semántica.", icon: <Search className="w-5 h-5 text-lime-700" /> },
                            { title: "Certificado SSL", desc: "Seguridad bancaria (candado verde) incluida.", icon: <ShieldCheck className="w-5 h-5 text-lime-700" /> },
                            { title: "Dominio .com", desc: "Tu nombre en internet gratis por 1 año.", icon: <Globe className="w-5 h-5 text-lime-700" /> },
                            { title: "Hosting Edge", desc: "Servidores globales de carga ultra rápida.", icon: <Zap className="w-5 h-5 text-lime-700" /> },
                            { title: "Código Limpio", desc: "Sin basura. Solo rendimiento puro.", icon: <Code2 className="w-5 h-5 text-lime-700" /> },
                            { title: "Soporte Post-Venta", desc: "3 meses de garantía contra fallos.", icon: <MessageCircle className="w-5 h-5 text-lime-700" /> },
                        ].map((feature, idx) => (
                            <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow items-start">
                                <div className="shrink-0 p-2.5 bg-lime-100 rounded-full">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 leading-tight">{feature.title}</h3>
                                    <p className="text-sm text-gray-500 leading-snug">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* --- 4. PROYECTOS RECIENTES --- */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
                className="py-20 px-6 bg-gray-50 border-t border-gray-200"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-lime-600 font-bold text-xs uppercase tracking-widest mb-2 block">
                                Track Record
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-black">
                                Proyectos <span className="text-lime-500">Recientes.</span>
                            </h2>
                        </div>
                        <a href="https://somosmada.com" target="_blank" className="text-sm font-bold border-b border-black pb-1 hover:text-lime-600 hover:border-lime-600 transition-colors">
                            Ver Portafolio Completo →
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project, i) => (
                            <div key={i} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <a href={project.demoUrl} className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-lime-400 transition-colors">
                                            Ver Proyecto
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="text-xs font-mono text-gray-400 uppercase">{project.category}</div>
                                        <div className="flex items-center gap-1 text-lime-600 bg-lime-50 px-2 py-0.5 rounded-full">
                                            <Trophy className="w-3 h-3" />
                                            <span className="text-[10px] font-bold uppercase">{project.result}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-black mb-4">{project.title}</h3>

                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <a href={project.demoUrl} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
                                            <Play className="w-3 h-3 fill-current" />
                                            Ver Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* --- 5. SECCIÓN MOTOR (PLANES) --- */}
            <motion.section
                id="motor"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
                className="py-20 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden"
            >
                <div className="max-w-7xl mx-auto relative z-10">

                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-lime-600 font-bold text-xs uppercase tracking-widest mb-4 block">
                            02. Arquitectura
                        </span>
                        <h2 className="font-display font-black uppercase text-3xl md:text-5xl text-black mb-4">
                            Elige tu Motor
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Cada negocio necesita una potencia distinta. ¿Qué objetivo tienes hoy?
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* SELECTOR */}
                        <div className="lg:col-span-4 flex flex-col gap-3">
                            {Object.keys(plansInfo).map((planKey) => (
                                <button
                                    key={planKey}
                                    onClick={() => setActivePlan(planKey)}
                                    className={`text-left p-5 md:p-6 rounded-2xl transition-all duration-300 group relative overflow-hidden border ${activePlan === planKey
                                        ? 'bg-black text-white shadow-xl border-black scale-[1.02]'
                                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border-transparent'
                                        }`}
                                >
                                    <div className="flex items-center justify-between relative z-10">
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-widest block mb-1 opacity-70">Nivel</span>
                                            <span className="text-lg font-display font-bold uppercase tracking-wide">
                                                {plansInfo[planKey].title}
                                            </span>
                                        </div>
                                        {activePlan === planKey && <ArrowRight className="w-5 h-5 text-lime-400" />}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* DISPLAY DE VALOR */}
                        <div className="lg:col-span-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePlan}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className={`rounded-[2rem] p-6 md:p-12 shadow-2xl relative overflow-hidden border border-gray-100 bg-white`}
                                >
                                    <motion.div
                                        variants={breathingBlob}
                                        animate="animate"
                                        className={`absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none opacity-20 ${plansInfo[activePlan].blobColor}`}
                                    />

                                    <div className="relative z-10">
                                        <div className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white shadow-sm border border-gray-100 ${plansInfo[activePlan].color}`}>
                                            {plansInfo[activePlan].icon}
                                            {plansInfo[activePlan].subtitle}
                                        </div>

                                        <p className="text-lg md:text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
                                            {plansInfo[activePlan].desc}
                                        </p>

                                        <div className="bg-gray-50/80 backdrop-blur-sm p-5 md:p-6 rounded-2xl mb-8 border border-gray-200">
                                            <p className="font-medium text-gray-700 text-sm md:text-base">
                                                {plansInfo[activePlan].target}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 mb-10">
                                            {plansInfo[activePlan].features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${plansInfo[activePlan].color.replace('text-', 'text-opacity-70 text-')}`} />
                                                    <span className="text-gray-600 font-medium text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                            <span className="text-sm text-gray-400 font-medium hidden md:block">
                                                ¿Te interesa la arquitectura {plansInfo[activePlan].title}?
                                            </span>

                                            <a
                                                href={`https://wa.me/${PHONE_NUMBER}?text=Hola,%20me%20interesa%20la%20solución%20${plansInfo[activePlan].title}.%20¿Podemos%20agendar%20una%20reunión?`}
                                                target="_blank"
                                                className="w-full md:w-auto px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group shadow-lg"
                                            >
                                                Cotizar con un Experto
                                                <MessageCircle className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* --- 6. CTA FINAL --- */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
                className="py-24 px-6 md:px-20 bg-lime-400 text-black"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-display font-black uppercase text-4xl sm:text-5xl md:text-6xl mb-6 leading-[0.9] break-words">
                        ¿Listo para el siguiente nivel?
                    </h2>
                    <p className="text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto opacity-80 px-4">
                        Agenda una sesión de descubrimiento de 15 minutos. Sin ventas agresivas, solo consultoría técnica.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href={`https://wa.me/${PHONE_NUMBER}`}
                            target="_blank"
                            className="w-full md:w-auto flex items-center justify-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>WhatsApp Directo</span>
                        </a>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}