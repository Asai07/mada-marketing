'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, BarChart3, Users, MessageCircle, CheckCircle2, Zap, TrendingUp, AlertTriangle, Check, DollarSign, XCircle } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- COMPONENTE GRÁFICO ROTATIVO (SOLUCIÓN) ---
const RotatingSuccessGraphic = () => {
    const [activeView, setActiveView] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveView((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const views = [
        {
            id: "growth",
            label: "Crecimiento",
            icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-lime-400" />,
            component: (
                <div className="flex items-end justify-center gap-2 h-28 md:h-32 w-full px-4 md:px-8">
                    {[30, 50, 40, 70, 60, 90, 100].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="w-3 md:w-4 bg-lime-400 rounded-t-sm opacity-80"
                        />
                    ))}
                </div>
            )
        },
        {
            id: "radar",
            label: "Adquisición",
            icon: <Target className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />,
            component: (
                <div className="relative flex items-center justify-center h-28 md:h-32 w-full">
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute w-16 h-16 md:w-20 md:h-20 border-2 border-blue-400 rounded-full"
                    />
                    <motion.div
                        animate={{ scale: [1, 2], opacity: [1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="absolute w-16 h-16 md:w-20 md:h-20 border border-blue-400/50 rounded-full"
                    />
                    <Users className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10" />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute w-24 h-24 md:w-28 md:h-28"
                    >
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#3b82f6]" />
                    </motion.div>
                </div>
            )
        },
        {
            id: "sales",
            label: "Ventas",
            icon: <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-green-400" />,
            component: (
                <div className="flex items-center justify-center gap-3 md:gap-4 h-28 md:h-32 w-full">
                    {[1, 2, 3].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.5, repeat: Infinity, repeatDelay: 2 }}
                            className="p-3 md:p-4 bg-zinc-800 rounded-2xl border border-green-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                        >
                            <span className="text-green-400 font-bold text-lg md:text-xl">$</span>
                        </motion.div>
                    ))}
                </div>
            )
        }
    ];

    return (
        <div className="bg-black/80 w-full h-[350px] md:h-[400px] rounded-[30px] p-1 flex flex-col relative overflow-hidden backdrop-blur-sm border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-lime-500/10 to-transparent opacity-50"></div>

            {/* Header del Gráfico (Tabs) */}
            <div className="flex justify-between items-center p-3 md:p-4 border-b border-white/5 bg-zinc-900/50 rounded-t-[28px] relative z-10">
                {views.map((view, index) => (
                    <button
                        key={view.id}
                        onClick={() => setActiveView(index)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all duration-300 ${activeView === index ? 'bg-white/10 text-white' : 'text-gray-600 hover:text-gray-400'}`}
                    >
                        <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${activeView === index ? 'bg-lime-400 animate-pulse' : 'bg-gray-700'}`} />
                        <span className={activeView === index ? 'inline' : 'hidden sm:inline'}>{view.label}</span>
                    </button>
                ))}
            </div>

            {/* Cuerpo del Gráfico Animado */}
            <div className="flex-1 flex items-center justify-center relative z-10 p-6 md:p-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeView}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="w-full flex flex-col items-center"
                    >
                        {views[activeView].component}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 md:mt-8 flex items-center gap-3 bg-zinc-900 px-4 py-2 rounded-lg border border-white/10"
                        >
                            {views[activeView].icon}
                            <span className="text-xs md:text-sm font-mono text-gray-300 uppercase tracking-widest">
                                Sistema Activo
                            </span>
                            <span className="flex h-1.5 w-1.5 md:h-2 md:w-2 relative ml-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-full w-full bg-lime-500"></span>
                            </span>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default function MarketingPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-lime-400 selection:text-black font-sans">

            {/* HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden pt-20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-900/10 via-black to-black"></div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase leading-[0.95] mb-6 md:mb-8">
                            Marketing Digital que convierte clics en <br /> <span className="text-lime-400">Clientes Reales.</span>
                        </h1>

                        <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 md:mb-12 font-light">
                            De nada sirve un sitio web espectacular si nadie lo ve. Diseñamos sistemas de adquisición de tráfico (Google & Meta Ads) orientados 100% al ROI.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="https://wa.me/528180114561?text=Hola,%20me%20interesa%20una%20estrategia%20de%20marketing." target="_blank" className="px-8 py-3 md:px-10 md:py-4 bg-lime-400 text-black font-bold rounded-full hover:scale-105 transition-transform text-base md:text-lg flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(163,230,53,0.3)]">
                                <Zap className="w-4 h-4 md:w-5 md:h-5" />
                                Iniciar Estrategia
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECCIÓN 1: EL PROBLEMA (LIMPIO Y CON "X") */}
            <section className="py-20 md:py-24 px-6 bg-zinc-950 border-t border-gray-900">
                <div className="max-w-4xl mx-auto text-center">

                    <div className="inline-flex items-center gap-2 mb-6 text-red-400 bg-red-500/10 px-4 py-2 rounded-full">
                        <AlertTriangle className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="font-bold uppercase tracking-wider text-xs md:text-sm">El Problema Común</span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-display font-bold mb-6 leading-tight">El Síndrome del "Sitio Fantasma"</h3>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                        El 90% de las empresas lanzan su web y esperan que los clientes lleguen por arte de magia. La realidad es dura: sin un motor de tráfico activo, tu inversión digital es invisible.
                    </p>

                    {/* Lista de Errores con X */}
                    <div className="grid md:grid-cols-1 gap-4 max-w-xl mx-auto text-left">
                        {[
                            "Tráfico de baja calidad que rebota.",
                            "Presupuesto quemado en 'Boost Post' sin estrategia.",
                            "Desconocimiento total del costo por cliente (CAC)."
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-black border border-red-900/20 hover:border-red-500/40 transition-colors">
                                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                                <span className="text-gray-300 text-sm md:text-base font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SECCIÓN 2: LA SOLUCIÓN (CON GRÁFICO DE ÉXITO) */}
            <section className="py-24 px-6 bg-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Texto Solución */}
                    <div>
                        <span className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-4 block">
                            // La Metodología MADA
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
                            Un Ecosistema de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">Crecimiento Real.</span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10">
                            Dejamos la improvisación para los aficionados. Implementamos un método científico de experimentación, medición y optimización para escalar tus ventas mes a mes.
                        </p>

                        {/* Lista de Aciertos (Palomitas Verdes) */}
                        <div className="space-y-4">
                            {[
                                "Estrategia Data-Driven (Sin suposiciones)",
                                "Creativos de Alto Rendimiento (Videos/Diseño)",
                                "Escalamiento Predictivo y Rentable"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <div className="p-2 bg-lime-400/20 rounded-full">
                                        <Check className="w-4 h-4 md:w-5 md:h-5 text-lime-400" />
                                    </div>
                                    <span className="font-medium text-white text-sm md:text-base">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* GRÁFICO DINÁMICO ROTATIVO (Aquí es donde brilla) */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-lime-500 to-green-600 rounded-[32px] blur opacity-30 animate-pulse"></div>
                        <RotatingSuccessGraphic />
                    </div>

                </div>
            </section>

            {/* SECCIÓN 3: SERVICIOS DETALLADOS (Cards) */}
            <section className="py-24 px-6 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                title: "Paid Media (Ads)",
                                desc: "Gestión experta de campañas en Meta y Google. Segmentación láser para llegar solo a quien tiene la intención de compra.",
                                icon: <Target className="w-8 h-8 md:w-10 md:h-10 text-lime-400" />
                            },
                            {
                                title: "Creativos que Venden",
                                desc: "El 70% del éxito es el anuncio. Creamos videos (UGC), imágenes y copys persuasivos diseñados para detener el scroll.",
                                icon: <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
                            },
                            {
                                title: "Analítica & Growth",
                                desc: "Tableros en tiempo real. Sabrás exactamente cuánto te cuesta cada venta. Optimizamos diariamente para maximizar tu ROI.",
                                icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 md:p-8 bg-black border border-white/10 rounded-2xl hover:border-lime-500/50 transition-all group"
                            >
                                <div className="mb-4 md:mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{item.title}</h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-24 md:py-32 px-6 bg-lime-400 text-black text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black uppercase mb-6 md:mb-8 leading-[0.95]">
                        ¿Hablamos de Números?
                    </h2>
                    <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto opacity-80">
                        Agenda una sesión gratuita de 15 minutos para auditar tu estrategia actual y ver dónde estás perdiendo dinero.
                    </p>
                    <a href="https://wa.me/528180114561" target="_blank" className="inline-flex items-center gap-3 px-10 py-4 md:px-12 md:py-5 bg-black text-white font-bold rounded-full text-base md:text-lg hover:scale-105 transition-transform shadow-2xl">
                        Agendar Auditoría de Growth
                    </a>
                </div>
            </section>

        </main>
    );
}