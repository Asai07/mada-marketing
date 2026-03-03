'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Target, BarChart3, Mail, Megaphone, Search } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: <Target className="w-7 h-7" />,
        title: 'Google Ads',
        desc: 'Campañas de búsqueda y display que aparecen justo cuando tu cliente te está buscando. Sin presupuesto desperdiciado.',
        tags: ['Search Ads', 'Display', 'Remarketing', 'Shopping Ads'],
    },
    {
        icon: <Megaphone className="w-7 h-7" />,
        title: 'Meta Ads',
        desc: 'Publicidad en Facebook e Instagram con segmentación quirúrgica por intereses, comportamientos y audiencias similares.',
        tags: ['Facebook Ads', 'Instagram Ads', 'Lead Generation', 'Retargeting'],
    },
    {
        icon: <Search className="w-7 h-7" />,
        title: 'SEO de Contenido',
        desc: 'Estrategia editorial y optimización de contenido para posicionarte orgánicamente en Google y crecer sin depender de publicidad.',
        tags: ['Keyword Research', 'Blog Strategy', 'Link Building', 'Local SEO'],
    },
    {
        icon: <Mail className="w-7 h-7" />,
        title: 'Email Marketing',
        desc: 'Secuencias de nurturing, newsletters y automatizaciones que convierten prospectos en clientes y clientes en promotores.',
        tags: ['Automatización', 'Newsletters', 'Segmentación', 'A/B Testing'],
    },
    {
        icon: <BarChart3 className="w-7 h-7" />,
        title: 'Analítica y Reportes',
        desc: 'Medimos todo lo que importa. Dashboards en tiempo real, atribución de conversiones y reportes mensuales ejecutivos.',
        tags: ['Google Analytics 4', 'Meta Pixel', 'Google Tag Manager', 'Looker Studio'],
    },
    {
        icon: <TrendingUp className="w-7 h-7" />,
        title: 'Estrategia de Crecimiento',
        desc: 'No solo ejecutamos campañas — construimos el sistema completo: embudo, mensajes, canales y métricas de éxito.',
        tags: ['Funnel Design', 'CRO', 'Growth Hacking', 'Brand Strategy'],
    },
];

const process = [
    { step: '01', title: 'Auditoría', desc: 'Analizamos tu presencia digital actual, tus competidores y las oportunidades de mercado.' },
    { step: '02', title: 'Estrategia', desc: 'Definimos canales, mensajes, presupuesto y KPIs claros antes de invertir un solo peso.' },
    { step: '03', title: 'Ejecución', desc: 'Lanzamos, monitoreamos y optimizamos semana a semana con datos reales.' },
    { step: '04', title: 'Reporte', desc: 'Reportes mensuales con resultados claros: leads, conversiones, costo por adquisición y ROI.' },
];

export default function MarketingDigitalClient() {
    return (
        <div className="bg-white min-h-screen">

            {/* HERO */}
            <section className="pt-40 pb-20 px-6 bg-[#050505] text-white overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-6 block"
                    >
                        // Estrategia & Crecimiento
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-6xl md:text-[9vw] font-display font-bold leading-none mb-8 uppercase"
                    >
                        Marketing<br />
                        <span className="text-lime-400">que</span><br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Convierte.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed"
                    >
                        No gestionamos redes sociales bonitas. Construimos sistemas de adquisición de clientes
                        que generan retorno medible y crecimiento sostenible.
                    </motion.p>
                </div>
            </section>

            {/* SERVICIOS GRID */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        className="mb-16"
                    >
                        <span className="text-lime-600 font-mono text-xs uppercase tracking-widest mb-4 block">// Nuestros servicios</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-black">Lo que hacemos.</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ delay: i * 0.08 }}
                                className="p-8 border border-gray-200 rounded-2xl hover:border-lime-400 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="p-3 bg-lime-50 text-lime-600 rounded-xl w-fit mb-6 group-hover:bg-lime-100 transition-colors">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-display font-bold text-black mb-3 group-hover:text-lime-600 transition-colors">{s.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {s.tags.map((tag, j) => (
                                        <span key={j} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium group-hover:bg-lime-50 group-hover:text-lime-700 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESO */}
            <section className="py-20 md:py-32 px-6 bg-[#050505] text-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        className="mb-16"
                    >
                        <span className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-4 block">// Cómo trabajamos</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Proceso probado.</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {process.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <span className="text-lime-400 font-mono text-xs mb-4 block">/{p.step}</span>
                                <h3 className="text-xl font-display font-bold text-white mb-3">{p.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-lime-400 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-6">¿Listo para crecer?</h2>
                    <p className="text-black/70 mb-10 text-lg">Cuéntanos tu negocio y definimos juntos la estrategia que necesitas.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="px-10 py-4 bg-black text-white font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            Hablar con nosotros <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/precios"
                            className="px-10 py-4 border-2 border-black text-black font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors inline-flex items-center justify-center gap-2"
                        >
                            Ver precios <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
