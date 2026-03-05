'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const values = [
    {
        num: '01',
        title: 'Código con intención',
        desc: 'No escribimos código por escribirlo. Cada línea tiene un propósito: velocidad, conversión o experiencia. Nada de relleno.',
    },
    {
        num: '02',
        title: 'Resultados, no promesas',
        desc: 'Medimos todo lo que construimos. Si no se puede medir, no se puede mejorar. Entregamos activos digitales, no proyectos bonitos.',
    },
    {
        num: '03',
        title: 'Transparencia total',
        desc: 'Precios claros, timelines honestos y comunicación directa. Nunca te dejamos en espera sin respuesta.',
    },
    {
        num: '04',
        title: 'Tecnología de vanguardia',
        desc: 'Usamos Next.js, React y las mismas herramientas que usan las startups más exitosas del mundo. Sin plantillas lentas.',
    },
];

const stats = [
    { value: 'Next.js', label: 'Tecnología principal' },
    { value: '<48h', label: 'Tiempo de respuesta' },
    { value: '100%', label: 'Código a medida' },
    { value: 'MTY', label: 'Base de operaciones' },
];

export default function NosotrosClient() {
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
                        // Sobre nosotros
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-6xl md:text-[10vw] font-display font-bold leading-none mb-8 uppercase"
                    >
                        Somos<br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>MADA.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed"
                    >
                        Una agencia de desarrollo web y marketing digital nacida en Monterrey con una obsesión:
                        construir activos digitales que realmente funcionen para tu negocio.
                    </motion.p>
                </div>
            </section>

            {/* MANIFIESTO */}
            <section className="py-20 md:py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-lime-600 font-mono text-xs uppercase tracking-widest mb-6 block">// Por qué existimos</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-8 leading-tight">
                            El internet está lleno de sitios web que nadie visita.
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Lo vemos todos los días: páginas lentas hechas en plantillas, sin estrategia, sin SEO,
                            sin conversión. Empresas invirtiendo en presencia digital que no genera retorno.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            MADA nació para resolver eso. Combinamos diseño de alto impacto, código moderno
                            y estrategia de negocio en un solo equipo.  <strong className="text-black">Tu sitio web no es un gasto,
                                es tu mejor vendedor.</strong>
                        </p>
                        <Link
                            href="/servicios"
                            className="inline-flex items-center gap-2 font-bold text-black border-b-2 border-lime-400 pb-1 hover:text-lime-600 transition-colors text-sm uppercase tracking-widest"
                        >
                            Ver nuestros servicios <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100"
                    >
                        <Image
                            src="/manifesto.webp"
                            alt="Equipo MADA trabajando en proyectos digitales"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="font-display font-bold text-xl">Monterrey, NL</p>
                            <p className="text-sm text-white/70">Desde 2023</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STATS */}
            <section className="py-16 px-6 bg-[#050505]">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <p className="text-4xl md:text-5xl font-display font-bold text-lime-400 mb-2">{stat.value}</p>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* VALORES */}
            <section className="py-20 md:py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <span className="text-lime-600 font-mono text-xs uppercase tracking-widest mb-4 block">// Nuestros principios</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-black">Cómo<br />trabajamos.</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 border border-gray-200 rounded-2xl hover:border-lime-400 hover:shadow-lg transition-all duration-300 group"
                            >
                                <span className="text-lime-600 font-mono text-xs mb-4 block">/{v.num}</span>
                                <h3 className="text-xl font-display font-bold text-black mb-3 group-hover:text-lime-600 transition-colors">{v.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-lime-400">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-6">¿Hablamos?</h2>
                    <p className="text-black/70 mb-10 text-lg">Cuéntanos tu proyecto. Respondemos en menos de 24 horas.</p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-black text-white font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors"
                    >
                        Ir a Contacto <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
