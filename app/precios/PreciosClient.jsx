'use client';
import React from 'react';
// IMPORTANTE: Ya no importamos PricingSection para evitar redundancia
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, ShieldCheck, Clock, Headphones, Zap } from 'lucide-react';
import Link from 'next/link';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const comparisonFeatures = [
    { feature: 'Dominio .com (1 año)', ignition: true, momentum: true, singularity: true },
    { feature: 'Hosting incluido', ignition: true, momentum: true, singularity: true },
    { feature: 'SSL / HTTPS', ignition: true, momentum: true, singularity: true },
    { feature: 'Diseño Responsive', ignition: true, momentum: true, singularity: true },
    { feature: 'Botón flotante WhatsApp', ignition: true, momentum: true, singularity: true },
    { feature: 'Formulario de contacto', ignition: true, momentum: true, singularity: true },
    { feature: 'Número de secciones', ignition: '1 (Landing)', momentum: 'Hasta 5', singularity: 'Ilimitadas' },
    { feature: 'CMS autoadministrable', ignition: false, momentum: true, singularity: true },
    { feature: 'SEO Técnico + indexación', ignition: 'Básico', momentum: true, singularity: 'Avanzado' },
    { feature: 'Google Analytics / Pixel', ignition: false, momentum: true, singularity: true },
    { feature: 'Blog / Noticias', ignition: false, momentum: true, singularity: true },
    { feature: 'E-commerce / Pagos', ignition: false, momentum: false, singularity: true },
    { feature: 'Animaciones avanzadas', ignition: false, momentum: false, singularity: true },
    { feature: 'Integración CRM', ignition: false, momentum: true, singularity: true },
    { feature: 'Multilenguaje', ignition: false, momentum: false, singularity: true },
    { feature: 'Soporte post-entrega', ignition: '3 meses', momentum: 'Prioritario', singularity: 'SLA dedicado' },
    { feature: 'Tiempo de entrega', ignition: '7-10 días', momentum: '2-3 semanas', singularity: 'A definir' },
];

const pricingFAQs = [
    {
        q: '¿Los precios incluyen IVA?',
        a: 'Los precios listados no incluyen IVA. Al confirmar tu proyecto te enviamos una cotización formal con el desglose fiscal completo.'
    },
    {
        q: '¿Cuáles son las formas de pago?',
        a: 'Aceptamos transferencia bancaria (SPEI), pago con tarjeta de crédito/débito y PayPal. Pedimos un anticipo del 50% para iniciar el proyecto y el restante al momento de la entrega.'
    },
    {
        q: '¿Qué pasa si necesito más cambios de los incluidos?',
        a: 'Cada plan incluye rondas de revisión. Si necesitas cambios adicionales después de entregar el proyecto, los cotizamos por separado a una tarifa preferencial para clientes.'
    },
    {
        q: '¿Puedo actualizar mi plan en el futuro?',
        a: 'Sí. Si empiezas con Ignition y tu negocio crece, podemos escalar tu sitio al plan Momentum o Singularity. El trabajo existente se toma como base para reducir costos.'
    },
    {
        q: '¿El hosting es propio o dependo de MADA?',
        a: 'El hosting está en plataformas líderes (Vercel, AWS). Te damos acceso total a tu cuenta para que siempre seas dueño de tu sitio, independientemente de si sigues trabajando con nosotros.'
    },
    {
        q: '¿Ofrecen servicios de mantenimiento mensual?',
        a: 'Sí. Contamos con paquetes de mantenimiento mensual que incluyen actualizaciones de seguridad, backups, cambios de contenido y soporte técnico. Consúltamos por WhatsApp.'
    },
];

function CellValue({ val }) {
    if (val === true) return <Check className="w-5 h-5 text-lime-500 mx-auto" />;
    if (val === false) return <X className="w-5 h-5 text-gray-300 mx-auto" />;
    return <span className="text-sm text-gray-600 font-medium">{val}</span>;
}

export default function PreciosClient() {
    const PHONE_NUMBER = "528100000000";

    const handleOpenBooking = () => {
        window.dispatchEvent(new Event('open-booking-modal'));
    };

    return (
        <div className="bg-white min-h-screen">

            {/* HERO */}
            <section className="pt-40 pb-20 px-6 bg-[#050505] text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-6 block"
                    >
                        // Investment Models
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-8xl font-display font-bold leading-none mb-8"
                    >
                        Inversión<br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Transparente.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-xl mx-auto text-lg"
                    >
                        Sin letra pequeña. Sin sorpresas. Elige el motor que necesita tu negocio.
                    </motion.p>
                </div>
            </section>

            {/* GARANTÍAS - Nuestro Compromiso */}
            <section className="py-20 px-6 bg-gray-50 border-b border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-12">
                        <span className="text-lime-600 font-mono text-xs uppercase tracking-widest mb-4 block">
                            // El Estándar MADA
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-black">
                            Garantías y Compromisos
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <ShieldCheck className="w-6 h-6 text-lime-600" />,
                                title: 'Transparencia Total',
                                desc: 'Sin letras pequeñas. Contrato claro desde el inicio y cero costos ocultos de mantenimiento.'
                            },
                            {
                                icon: <Zap className="w-6 h-6 text-lime-600" />,
                                title: 'Rendimiento Premium',
                                desc: 'Olvídate de las páginas lentas. Código limpio optimizado para cargar en menos de 1 segundo.'
                            },
                            {
                                icon: <Clock className="w-6 h-6 text-lime-600" />,
                                title: 'Entregas Puntuales',
                                desc: 'Tu tiempo es dinero. Definimos fechas de entrega reales en contrato y las cumplimos siempre.'
                            },
                            {
                                icon: <Headphones className="w-6 h-6 text-lime-600" />,
                                title: 'Soporte Directo',
                                desc: 'Soporte humano por WhatsApp. Resolvemos dudas y damos garantía técnica post-lanzamiento.'
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-lime-300 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                            >
                                <div className="p-3 bg-lime-50 rounded-xl mb-6 inline-block">
                                    {item.icon}
                                </div>
                                <h3 className="font-display font-bold text-black mb-3 text-lg">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* TABLA COMPARATIVA - Ahora es la protagonista */}
            <section className="py-20 md:py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-lime-600 font-mono text-xs uppercase tracking-widest mb-4 block">// Comparativa Detallada</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-black">Planes y Soluciones de Desarrollo Web</h2>
                        <p className="text-gray-500 mt-4 max-w-lg mx-auto">Más que páginas web, construimos herramientas digitales diseñadas para captar clientes, optimizar tu marketing y escalar tu negocio.</p>
                    </motion.div>

                    <div className="overflow-x-auto rounded-[2rem] border border-gray-200 shadow-xl bg-white p-2">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr className="border-b-2 border-black/5">
                                    <th className="py-8 px-6 text-left w-1/3">
                                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Características Clave</span>
                                    </th>

                                    {/* HEADER IGNITION */}
                                    <th className="py-8 px-4 text-center">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="text-2xl font-display font-bold text-black">IGNITION</span>
                                            <span className="text-gray-500 font-medium">$7,500 MXN</span>
                                            <a href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Me interesa IGNITION")}`} target="_blank" rel="noopener noreferrer" className="mt-4 text-xs uppercase tracking-widest font-bold text-black border border-black/20 hover:bg-gray-50 hover:border-black rounded-full px-4 py-2 transition-colors flex items-center gap-2 justify-center">
                                                <WhatsAppIcon className="w-4 h-4" /> Cotizar
                                            </a>                                        </div>
                                    </th>

                                    {/* HEADER MOMENTUM */}
                                    <th className="py-8 px-4 text-center relative overflow-hidden rounded-t-2xl bg-black">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-lime-400 text-black text-[9px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-b-md">Recomendado</div>
                                        <div className="flex flex-col items-center gap-2 mt-4 relative z-10">
                                            <span className="text-2xl font-display font-bold text-white">MOMENTUM</span>
                                            <span className="text-lime-400 font-medium">$15,000 MXN</span>
                                            <button onClick={handleOpenBooking} className="mt-4 text-xs uppercase tracking-widest font-bold bg-lime-400 text-black rounded-full px-6 py-2 hover:bg-lime-300 transition-colors">Agendar</button>
                                        </div>
                                    </th>

                                    {/* HEADER SINGULARITY */}
                                    <th className="py-8 px-4 text-center">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="text-2xl font-display font-bold text-purple-600">SINGULARITY</span>
                                            <span className="text-gray-500 font-medium">A Medida</span>
                                            <button onClick={handleOpenBooking} className="mt-4 text-xs uppercase tracking-widest font-bold border border-purple-200 text-purple-600 hover:bg-purple-50 rounded-full px-4 py-2 transition-colors">Consultoría</button>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((row, i) => (
                                    <tr key={i} className={`border-b border-gray-100 hover:bg-gray-50/50 transition-colors`}>
                                        <td className="py-5 px-6 text-sm font-medium text-gray-700">{row.feature}</td>
                                        <td className="py-5 px-4 text-center"><CellValue val={row.ignition} /></td>
                                        {/* Columna Momentum oscurecida sutilmente para destacar */}
                                        <td className="py-5 px-4 text-center bg-gray-50/30 border-l border-r border-gray-100"><CellValue val={row.momentum} /></td>
                                        <td className="py-5 px-4 text-center"><CellValue val={row.singularity} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ DE PRECIOS */}
            <section className="py-20 md:py-32 px-6 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-lime-600 font-mono text-xs uppercase tracking-widest mb-4 block">// Transparencia</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-black">Preguntas Frecuentes</h2>
                    </motion.div>

                    <div className="space-y-4">
                        {pricingFAQs.map((faq, i) => (
                            <motion.details
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                            >
                                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-display font-bold text-black list-none hover:bg-gray-50 transition-colors">
                                    {faq.q}
                                    <ArrowRight className="w-4 h-4 text-lime-600 shrink-0 group-open:rotate-90 transition-transform" />
                                </summary>
                                <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                            </motion.details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-20 px-6 bg-[#050505] text-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">¿Listo para empezar?</h2>
                    <p className="text-gray-400 mb-10">Agenda una llamada de 30 minutos gratuita. Sin compromiso, solo ideas.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleOpenBooking}
                            className="px-8 py-4 bg-lime-400 text-black font-bold text-sm uppercase tracking-widest hover:bg-lime-300 transition-colors rounded-full"
                        >
                            Agendar llamada gratis
                        </button>
                        <a
                            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Hola, me gustaría información sobre sus planes.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-widest hover:border-lime-400 hover:text-lime-400 transition-colors rounded-full flex items-center gap-2 justify-center"
                        >
                            <WhatsAppIcon className="w-4 h-4" />
                            Escribir por WhatsApp
                        </a>
                    </div>
                    <p className="mt-8 text-sm text-gray-400">
                        ¿Tienes un presupuesto diferente?{' '}
                        <Link href="/contacto" className="text-lime-400 hover:underline font-semibold">Cuéntanos y encontramos una solución.</Link>
                    </p>
                </motion.div>
            </section>
        </div>
    );
}