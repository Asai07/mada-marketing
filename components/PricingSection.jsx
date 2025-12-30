'use client';
import React from 'react';
import { Check, Sparkles, Zap, InfinityIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingSection = ({ onOpenBooking }) => {
    // --- 1. CONFIGURACIÓN DE CONTACTO ---
    const PHONE_NUMBER = "528180114561"; // ¡PON TU NÚMERO AQUÍ! (Con lada, sin espacios. Ej: 5215512345678)
    const CALENDLY_URL = "https://calendly.com/tu-usuario/discovery-call"; // Opcional: Si usas Calendly

    const handlePlanSelect = (plan) => {
        let url = "";
        let message = "";

        switch (plan) {
            case 'IGNITION':
                // Plan barato: Directo a WhatsApp para cerrar rápido
                message = encodeURIComponent("¡Hola! 👋 Estoy interesado en el Plan IGNITION de $4,900. ¿Podemos comenzar?");
                url = `https://wa.me/${PHONE_NUMBER}?text=${message}`;
                break;
            case 'MOMENTUM':
                // Plan medio: WhatsApp también funciona genial
                message = encodeURIComponent("¡Hola! 👋 Me interesa escalar con el Plan MOMENTUM de $12,500. Quisiera resolver unas dudas.");
                url = `https://wa.me/${PHONE_NUMBER}?text=${message}`;
                break;
            case 'SINGULARITY':

                if (onOpenBooking) {
                    onOpenBooking();
                }
                return;
            default:
                url = "#contact";
        }

        // Abrir en nueva pestaña
        window.open(url, '_blank');
    };

    // ... (Mantén tus variantes containerVariants e itemVariants igual) ...
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="py-20 md:py-32 px-6 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto">
                {/* ... (Header se mantiene igual) ... */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6"
                >
                    <div>
                        <span className="text-lime-600 font-mono text-xs uppercase tracking-widest mb-4 block">// Investment Models</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-black">Arquitectura de<br />Valor Digital.</h2>
                    </div>
                    <p className="max-w-md text-gray-500 text-sm md:text-base text-right">
                        No vendemos "gastos", vendemos activos. Elige la potencia de tu motor de crecimiento.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >

                    {/* PLAN 1: IGNITION */}
                    <motion.div variants={itemVariants} className="h-full">
                        <div className="group relative p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-lime-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                            {/* ... (Contenido del plan igual) ... */}
                            <div className="mb-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-white rounded-lg text-black shadow-sm group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Basic Tier</span>
                                </div>
                                <h3 className="text-3xl font-display font-bold mb-2">IGNITION</h3>
                                <p className="text-gray-500 text-sm h-12">Para validar ideas con impacto profesional inmediato.</p>
                            </div>

                            <div className="mb-8">
                                <span className="text-4xl font-bold font-display text-black">$4,900</span>
                                <span className="text-gray-500 text-sm ml-2">MXN / único</span>
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {[
                                    "Landing Page (One-pager de Alto Impacto)",
                                    "Dominio .com Gratis (1 Año)",
                                    "Diseño Responsive (Mobile First)",
                                    "Hosting Vercel (Velocidad Global)",
                                    "Certificado SSL (Sitio Seguro)",
                                    "Botón Flotante de WhatsApp",
                                    "Formulario de Contacto Funcional",
                                    "Hasta 3 Rondas de Cambios",
                                    "3 Meses de Mantenimiento Gratuito",
                                    "Entrega Express (5-7 Días)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                        <Check className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                                        <span className="leading-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* BOTÓN CON LÓGICA */}
                            <button
                                onClick={() => handlePlanSelect('IGNITION')}
                                className="w-full py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest"
                            >
                                Iniciar Ahora
                            </button>
                        </div>
                    </motion.div>

                    {/* PLAN 2: MOMENTUM */}
                    <motion.div variants={itemVariants} className="h-full relative z-10">
                        <div className="relative p-8 rounded-2xl bg-black text-white shadow-2xl hover:shadow-lime-900/20 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full transform md:-translate-y-4 ring-1 ring-black/5">
                            {/* ... (Contenido Momentum igual) ... */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-lime-400 text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                                Recomendado
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-lime-400 rounded-lg text-black shadow-[0_0_15px_rgba(163,230,53,0.5)]">
                                        <Zap className="w-6 h-6 fill-current" />
                                    </div>
                                    <span className="text-xs font-mono text-lime-400 uppercase tracking-wider">Growth Tier</span>
                                </div>
                                <h3 className="text-3xl font-display font-bold mb-2 text-white">MOMENTUM</h3>
                                <p className="text-gray-400 text-sm h-12">La estructura completa para empresas que buscan escalar.</p>
                            </div>

                            <div className="mb-8">
                                <span className="text-4xl font-bold font-display text-lime-400">$12,500</span>
                                <span className="text-gray-400 text-sm ml-2">MXN / único</span>
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {[
                                    "Sitio Web Multi-sección (Hasta 5)",
                                    "Diseño UX/UI Personalizado (Figma)",
                                    "CMS Autoadministrable (Blog/Noticias)",
                                    "SEO Técnico + Indexación en Google",
                                    "Integración Google Analytics / Pixel",
                                    "Optimización de Carga (Core Web Vitals)",
                                    "Integración con CRM / Email Marketing",
                                    "Páginas Legales (Privacidad/Cookies)",
                                    "Capacitación de Uso (Video Tutorial)",
                                    "Soporte Prioritario"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white font-medium">
                                        <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                                        <span className="leading-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* BOTÓN CON LÓGICA */}
                            <button
                                onClick={() => handlePlanSelect('MOMENTUM')}
                                className="w-full py-3 bg-lime-400 text-black font-bold border border-lime-400 hover:bg-transparent hover:text-lime-400 transition-all duration-300 text-xs uppercase tracking-widest"
                            >
                                Escalar mi Negocio
                            </button>
                        </div>
                    </motion.div>

                    {/* PLAN 3: SINGULARITY */}
                    <motion.div variants={itemVariants} className="h-full">
                        <div className="group relative p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-purple-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                            {/* ... (Contenido Singularity igual) ... */}
                            <div className="mb-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-white rounded-lg text-purple-600 shadow-sm group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                                        <InfinityIcon className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Scale Tier</span>
                                </div>
                                <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-purple-600 transition-colors">SINGULARITY</h3>
                                <p className="text-gray-500 text-sm h-12">Desarrollo a medida para marcas líderes y e-commerce.</p>
                            </div>

                            <div className="mb-8">
                                <span className="text-2xl font-bold font-display text-black">Custom</span>
                                <span className="block text-xs text-gray-500 mt-1">Desde $25,000 MXN</span>
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {[
                                    "Arquitectura 100% a Medida (Sin Plantillas)",
                                    "E-Commerce Completo / Pasarelas de Pago",
                                    "Animaciones Avanzadas (WebGL / 3D)",
                                    "Sistemas de Reservas / Áreas de Miembros",
                                    "Multilenguaje (Internacionalización)",
                                    "Estrategia de Copywriting & Marca",
                                    "Dashboard de Métricas Avanzado",
                                    "Auditoría de Competencia",
                                    "Infraestructura Cloud Escalable (AWS)",
                                    "SLA & Mantenimiento Dedicado"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                        <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                                        <span className="leading-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* BOTÓN CON LÓGICA */}
                            <button
                                onClick={() => handlePlanSelect('SINGULARITY')}
                                className="w-full py-3 border border-black text-black hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 text-xs font-bold uppercase tracking-widest"
                            >
                                Agendar Consultoría
                            </button>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};
export default PricingSection;