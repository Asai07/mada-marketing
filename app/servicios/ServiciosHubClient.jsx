'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, TrendingUp, Palette, ShoppingCart, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
    {
        id: '01',
        icon: <Code2 className="w-7 h-7" />,
        title: 'Desarrollo Web',
        category: 'Next.js & React',
        desc: 'Sitios web ultra-rápidos y escalables. Sin plantillas lentas. Desde landing pages hasta aplicaciones web complejas con tecnología de primer nivel.',
        highlights: ['Core Web Vitals optimizados', 'SEO técnico avanzado', 'Diseño responsive'],
        href: '/servicios/desarrollo-web',
        img: '/webs-interactivas.webp',
        color: 'lime',
    },
    {
        id: '02',
        icon: <TrendingUp className="w-7 h-7" />,
        title: 'Marketing Digital',
        category: 'Estrategia & Crecimiento',
        desc: 'Convertimos tráfico en clientes. Estrategias integrales que combinan Google Ads, Meta Ads, SEO y analítica para crecer de forma sostenible.',
        highlights: ['Google Ads & Meta Ads', 'Email marketing', 'Análisis y reportes'],
        href: '/servicios/marketing-digital',
        img: '/diseño-estrategico.webp',
        color: 'lime',
    },
    {
        id: '03',
        icon: <ShoppingCart className="w-7 h-7" />,
        title: 'Tiendas en Línea',
        category: 'E-Commerce',
        desc: 'Tu negocio abierto 24/7. Plataformas de comercio electrónico optimizadas para conversión, con pasarelas de pago integradas y gestión sencilla.',
        highlights: ['Pago seguro integrado', 'Gestión de inventario', 'UX de alto impacto'],
        href: '/servicios/desarrollo-web',
        img: '/e-comerce.webp',
        color: 'purple',
    },
    {
        id: '04',
        icon: <Palette className="w-7 h-7" />,
        title: 'Diseño Estratégico',
        category: 'Identidad & Marca',
        desc: 'Diseñamos para generar confianza y conversión. No solo hacemos que se vea bien; construimos una imagen que posiciona tu marca por encima de la competencia.',
        highlights: ['Identidad visual', 'UX/UI profesional', 'Diseño de conversión'],
        href: '/servicios/desarrollo-web',
        img: '/tecnología.webp',
        color: 'purple',
    },
    {
        id: '05',
        icon: <Smartphone className="w-7 h-7" />,
        title: 'Apps Híbridas',
        category: 'iOS, Android & Web',
        desc: 'Una sola app desarrollada con React que funciona en iOS, Android y web. Lanza en todas las plataformas sin duplicar costos ni equipo.',
        highlights: ['React Native', 'Capacitor', 'Publicación en App Stores'],
        href: '/servicios/apps',
        img: '/apps.webp',
        color: 'lime',
    },
];

export default function ServiciosHubClient() {
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
                        // Soluciones Digitales
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-6xl md:text-[10vw] font-display font-bold leading-none uppercase"
                    >
                        Nuestros<br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Servicios.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl text-lg mt-8"
                    >
                        Construimos activos digitales que trabajan por tu negocio.
                        Elige la solución que tu empresa necesita ahora.
                    </motion.p>
                </div>
            </section>

            {/* GRID DE SERVICIOS */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-6xl mx-auto space-y-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                href={service.href}
                                className="group grid md:grid-cols-2 gap-0 border border-gray-200 rounded-3xl overflow-hidden hover:border-lime-400 hover:shadow-xl transition-all duration-500 block"
                            >
                                {/* IMAGEN */}
                                <div className={`relative h-64 md:h-auto overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <Image
                                        src={service.img}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                </div>

                                {/* CONTENIDO */}
                                <div className={`p-8 md:p-12 flex flex-col justify-between bg-white ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 bg-gray-50 rounded-xl text-black group-hover:bg-lime-50 group-hover:text-lime-600 transition-colors">
                                                {service.icon}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-lime-600 font-mono text-xs">/{service.id}</span>
                                                <div className="p-2 border border-gray-200 rounded-full group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <span className="text-xs text-gray-500 uppercase tracking-wider font-bold block mb-2">{service.category}</span>
                                        <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4 group-hover:text-lime-600 transition-colors">
                                            {service.title}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed mb-8">{service.desc}</p>
                                    </div>

                                    <ul className="flex flex-wrap gap-2">
                                        {service.highlights.map((tag, j) => (
                                            <li key={j} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium group-hover:bg-lime-50 group-hover:text-lime-700 transition-colors">
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-[#050505] text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">¿Por dónde empezamos?</h2>
                    <p className="text-gray-400 mb-10">Cuéntanos tu proyecto y te decimos qué solución se ajusta mejor.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/precios"
                            className="px-8 py-4 bg-lime-400 text-black font-bold text-sm uppercase tracking-widest hover:bg-lime-300 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            Ver planes y precios <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/contacto"
                            className="px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-widest hover:border-lime-400 hover:text-lime-400 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            Hablar con nosotros <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
