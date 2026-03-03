'use client';
import React from 'react';
import PricingSection from '@/components/PricingSection';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, ShieldCheck, Clock, Headphones } from 'lucide-react';
import Link from 'next/link';

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
    { feature: 'Tiempo de entrega', ignition: '5-7 días', momentum: '2-3 semanas', singularity: 'A definir' },
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
    const PHONE_NUMBER = "528180114561";

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

            {/* GARANTÍAS */}
            <section className="py-12 px-6 border-b border-gray-100 bg-white">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <ShieldCheck className="w-6 h-6 text-lime-600" />, title: 'Sin contratos ocultos', desc: 'Contrato claro desde el inicio. Todo por escrito.' },
                        { icon: <Clock className="w-6 h-6 text-lime-600" />, title: 'Entregas puntuales', desc: 'Fechas de entrega reales que cumplimos siempre.' },
                        { icon: <Headphones className="w-6 h-6 text-lime-600" />, title: 'Soporte real', desc: 'Respondemos en menos de 24h en horario hábil.' },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <div className="p-3 bg-lime-50 rounded-xl shrink-0">{item.icon}</div>
                            <div>
                                <h3 className="font-display font-bold text-black mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PRICING CARDS */}
            <PricingSection onOpenBooking={handleOpenBooking} />

            {/* TABLA COMPARATIVA */}
            <section className="py-20 md:py-32 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-lime-600 font-mono text-xs uppercase tracking-widest mb-4 block">// Comparativa</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-black">¿Qué incluye cada plan?</h2>
                        <p className="text-gray-500 mt-4 max-w-lg mx-auto">Compara con detalle y elige sin dudas.</p>
                    </motion.div>

                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                        <table className="w-full min-w-[600px]">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="py-5 px-6 text-left text-sm font-bold text-gray-500 uppercase tracking-wider w-1/2">Característica</th>
                                    <th className="py-5 px-4 text-center text-sm font-display font-bold text-black">IGNITION</th>
                                    <th className="py-5 px-4 text-center text-sm font-display font-bold text-lime-600 bg-lime-50">MOMENTUM</th>
                                    <th className="py-5 px-4 text-center text-sm font-display font-bold text-purple-600">SINGULARITY</th>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-6 text-xs text-gray-400">Precio base</td>
                                    <td className="py-3 px-4 text-center font-bold text-black text-sm">$5,900 MXN</td>
                                    <td className="py-3 px-4 text-center font-bold text-lime-600 text-sm bg-lime-50">$12,500 MXN</td>
                                    <td className="py-3 px-4 text-center font-bold text-purple-600 text-sm">Desde $25,000</td>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((row, i) => (
                                    <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                        <td className="py-4 px-6 text-sm text-gray-700">{row.feature}</td>
                                        <td className="py-4 px-4 text-center"><CellValue val={row.ignition} /></td>
                                        <td className="py-4 px-4 text-center bg-lime-50/30"><CellValue val={row.momentum} /></td>
                                        <td className="py-4 px-4 text-center"><CellValue val={row.singularity} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ DE PRECIOS */}
            <section className="py-20 md:py-32 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-lime-600 font-mono text-xs uppercase tracking-widest mb-4 block">// Preguntas frecuentes</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-black">Dudas sobre precios</h2>
                    </motion.div>

                    <div className="space-y-4">
                        {pricingFAQs.map((faq, i) => (
                            <motion.details
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group border border-gray-200 rounded-xl overflow-hidden"
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
                            className="px-8 py-4 bg-lime-400 text-black font-bold text-sm uppercase tracking-widest hover:bg-lime-300 transition-colors"
                        >
                            Agendar llamada gratis
                        </button>
                        <a
                            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Hola, me gustaría información sobre sus planes.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-widest hover:border-lime-400 hover:text-lime-400 transition-colors"
                        >
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
