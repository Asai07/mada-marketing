'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Smartphone, Globe, Monitor, Zap, Shield, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const advantages = [
    {
        icon: <Zap className="w-6 h-6" />,
        title: 'Un solo equipo, todas las plataformas',
        desc: 'El mismo código React funciona en iOS, Android y web. Sin duplicar el equipo ni el presupuesto.',
    },
    {
        icon: <RefreshCw className="w-6 h-6" />,
        title: 'Actualizaciones instantáneas',
        desc: 'Actualiza contenido y funciones sin pasar por el proceso de revisión de App Store o Google Play.',
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: 'Rendimiento casi nativo',
        desc: 'Con tecnologías como React Native y Capacitor, la experiencia del usuario es indistinguible de una app nativa.',
    },
];

const techStack = [
    {
        icon: <Smartphone className="w-8 h-8" />,
        name: 'React Native',
        use: 'Apps iOS & Android',
        desc: 'La tecnología de Meta para construir apps móviles con React que compilan a código nativo real. Usada por Facebook, Instagram y Shopify.',
        color: 'lime',
    },
    {
        icon: <Globe className="w-8 h-8" />,
        name: 'Capacitor',
        use: 'Web → App Store',
        desc: 'Convierte tu sitio web en Next.js en una app nativa para iOS y Android en cuestión de días. Ideal si ya tienes web.',
        color: 'blue',
    },
    {
        icon: <Monitor className="w-8 h-8" />,
        name: 'Tauri',
        use: 'Apps de Escritorio',
        desc: 'Aplicaciones de escritorio ultraligeras para Windows, macOS y Linux construidas con React. El reemplazo moderno de Electron.',
        color: 'purple',
    },
];

const useCases = [
    'App de reservas o citas para tu negocio',
    'Marketplace interno o tienda con app propia',
    'App corporativa para empleados o campo',
    'Dashboard de analítica y control',
    'App de delivery o logística',
    'Plataforma educativa o e-learning',
];

export default function AppsClient() {
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
                        // Apps Híbridas
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-6xl md:text-[9vw] font-display font-bold leading-none mb-8 uppercase"
                    >
                        Una App.<br />
                        <span className="text-lime-400">Tres</span><br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Plataformas.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed"
                    >
                        Desarrollamos aplicaciones con React que funcionan en iOS, Android y web
                        desde una sola base de código. Lanzas más rápido, inviertes menos y sin comprometer la calidad.
                    </motion.p>
                </div>
            </section>

            {/* EXPLICACIÓN SIMPLE */}
            <section className="py-20 md:py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        <span className="text-lime-600 font-mono text-xs uppercase tracking-widest mb-6 block">// Qué es una app híbrida</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-8 leading-tight">
                            No más elegir entre iOS o Android.
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Una app nativa tradicional requiere dos equipos: uno para iOS (Swift) y otro para Android (Kotlin). Eso duplica el costo y el tiempo.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Con React, construimos <strong className="text-black">una sola app</strong> que compila a código nativo para ambas plataformas — y también funciona en la web. El resultado: la misma experiencia fluida en todos los dispositivos, en menos tiempo.
                        </p>
                        <div className="flex gap-6">
                            <div className="text-center">
                                <p className="text-3xl font-display font-bold text-lime-600 mb-1">3x</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Plataformas</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-display font-bold text-lime-600 mb-1">1</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Base de código</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-display font-bold text-lime-600 mb-1">60%</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Menos costo</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* VENTAJAS */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        className="space-y-6"
                    >
                        {advantages.map((a, i) => (
                            <div key={i} className="flex gap-4 p-6 border border-gray-200 rounded-2xl hover:border-lime-400 hover:shadow-md transition-all group">
                                <div className="p-3 bg-lime-50 text-lime-600 rounded-xl shrink-0 h-fit group-hover:bg-lime-100 transition-colors">
                                    {a.icon}
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-black mb-2">{a.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* TECH STACK */}
            <section className="py-20 md:py-32 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        className="mb-16"
                    >
                        <span className="text-lime-600 font-mono text-xs uppercase tracking-widest mb-4 block">// Tecnología</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-black">Las herramientas<br />que usamos.</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-white border border-gray-200 rounded-3xl hover:border-lime-400 hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className="p-4 bg-lime-50 text-lime-600 rounded-2xl w-fit mb-6 group-hover:bg-lime-100 transition-colors">
                                    {tech.icon}
                                </div>
                                <span className="text-xs text-lime-600 font-mono uppercase tracking-wider block mb-2">{tech.use}</span>
                                <h3 className="text-2xl font-display font-bold text-black mb-4">{tech.name}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{tech.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CASOS DE USO */}
            <section className="py-20 md:py-32 px-6 bg-[#050505] text-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        <span className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-6 block">// ¿Para quién es?</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">¿Tienes una idea de app?</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Si tu negocio necesita una app pero no quieres invertir en dos equipos de desarrollo, esta es la solución. Trabajamos contigo desde la idea hasta la publicación en App Store y Google Play.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-3"
                    >
                        {useCases.map((uc, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 border border-white/10 rounded-xl hover:border-lime-400/50 hover:bg-white/5 transition-all">
                                <span className="w-2 h-2 bg-lime-400 rounded-full shrink-0" />
                                <span className="text-gray-300 text-sm">{uc}</span>
                            </div>
                        ))}
                    </motion.div>
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
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-6">¿Tienes una idea?</h2>
                    <p className="text-black/70 mb-10 text-lg">Cuéntanos tu proyecto y te decimos si una app híbrida es la mejor solución para tu negocio.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="px-10 py-4 bg-black text-white font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            Hablemos de tu app <ArrowUpRight className="w-4 h-4" />
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
