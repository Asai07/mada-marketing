'use client';
import React from 'react';
import { ArrowLeft, Quote, Zap, BarChart3, Fingerprint } from 'lucide-react';

const ManifestoModal = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <div
            data-lenis-prevent
            className="fixed inset-0 z-[9999] bg-white text-black h-screen w-full overflow-y-auto overflow-x-hidden overscroll-contain"
        >

            {/* Botón Flotante de Regreso */}
            <div className="fixed top-6 left-6 z-[100]">
                <button
                    onClick={onClose}
                    className="group flex items-center gap-3 px-4 py-3 md:px-6 bg-black text-white rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300 shadow-xl"
                >
                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Cerrar</span>
                </button>
            </div>

            <div className="min-h-screen w-full px-4 md:px-6 py-24 md:py-40">
                <div className="max-w-5xl mx-auto">

                    {/* 1. HEADER (Ajustado para móvil) */}
                    <header className="mb-20 md:mb-32 animate-[fadeIn_0.8s_ease-out]">
                        <span className="inline-block px-4 py-2 bg-lime-100 text-lime-800 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
                            // Internal Memo: Why Us?
                        </span>
                        {/* CAMBIO AQUÍ: text-3xl en móvil -> text-5xl en tablet -> text-8xl en desktop */}
                        <h1 className="text-3xl sm:text-5xl md:text-8xl font-display font-black leading-[0.95] md:leading-[0.9] mb-8 md:mb-12 uppercase break-words">
                            No buscamos clientes. <br />
                            <span className="text-transparent stroke-text-black hover:text-lime-500 transition-colors duration-500">
                                Buscamos Cómplices.
                            </span>
                        </h1>
                        <div className="pl-4 md:pl-6 border-l-4 border-lime-400">
                            {/* CAMBIO AQUÍ: Texto más pequeño en móvil (text-lg) */}
                            <p className="text-lg md:text-3xl font-medium text-gray-800 leading-relaxed max-w-3xl">
                                El internet está lleno de ruido. Sitios web que parecen plantillas, aplicaciones que aburren y marcas que no se atreven a gritar. Nosotros existimos para romper ese silencio.
                            </p>
                        </div>
                    </header>

                    {/* 2. LA HISTORIA / MOTIVACIONES */}
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-20 md:mb-32">
                        <div className="space-y-6 md:space-y-8">
                            <h3 className="text-xl md:text-2xl font-bold border-b border-black pb-4">La Realidad Incómoda</h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                La mayoría de las agencias te venden "horas de desarrollo". Te entregan un código que funciona y se lavan las manos.
                                <br /><br />
                                <strong>Eso es mediocre.</strong>
                                <br /><br />
                                Tu marca no necesita solo "funcionar". Necesita seducir, convencer y convertir. Si tu web no te genera dinero o impacto, es solo un gasto.
                            </p>
                        </div>
                        {/* Caja de Cita */}
                        <div className="bg-black p-6 md:p-10 text-white rounded-2xl relative overflow-hidden group">
                            <Quote className="absolute top-6 right-6 text-lime-400 w-8 h-8 md:w-12 md:h-12 opacity-50 group-hover:scale-110 transition-transform" />
                            <p className="text-xl md:text-3xl font-display font-bold leading-tight relative z-10">
                                "El buen diseño es invisible. Se siente en la velocidad, se nota en la fluidez y se confirma en la cuenta bancaria."
                            </p>
                        </div>
                    </div>

                    {/* 3. LOS PILARES */}
                    <div className="mb-20 md:mb-32">
                        <h2 className="text-3xl md:text-6xl font-display font-bold mb-10 md:mb-16 text-center">Nuestra Obsesión</h2>

                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            {[
                                {
                                    icon: Fingerprint,
                                    title: "Identidad Radical",
                                    desc: "No copiamos tendencias. Extraemos el ADN de tu marca y lo convertimos en una experiencia digital que nadie puede replicar."
                                },
                                {
                                    icon: Zap,
                                    title: "Velocidad Obsesiva",
                                    desc: "Cada milisegundo cuenta. Optimizamos hasta lo que el ojo no ve para que la experiencia sea instantánea."
                                },
                                {
                                    icon: BarChart3,
                                    title: "Retorno de Inversión",
                                    desc: "No hacemos arte por amor al arte. Diseñamos embudos psicológicos para que tus visitantes se conviertan en usuarios."
                                }
                            ].map((item, i) => (
                                <div key={i} className="group p-6 md:p-8 border-2 border-gray-100 hover:border-black rounded-xl transition-all duration-300 hover:shadow-2xl bg-white">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-lime-100 text-lime-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-lime-400 transition-colors">
                                        <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 4. CIERRE / CTA (Ajustado para móvil) */}
                    {/* CAMBIO AQUÍ: p-6 en móvil en lugar de p-12 para dar más espacio al texto */}
                    <div className="bg-lime-400 rounded-3xl p-6 md:p-24 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20 mix-blend-multiply"></div>

                        <div className="relative z-10">
                            {/* CAMBIO AQUÍ: text-3xl en móvil, sube a 7xl en desktop */}
                            <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black mb-6 md:mb-8 leading-tight">
                                ¿Eres uno de los nuestros?
                            </h2>
                            <p className="text-base md:text-xl font-medium mb-8 md:mb-10 max-w-2xl mx-auto">
                                Si buscas lo seguro, lo barato y lo común, no somos para ti.
                                Si quieres dominar tu mercado, hablemos.
                            </p>

                            {/* CAMBIO AQUÍ: Botón más compacto en móvil */}
                            <button
                                onClick={onClose}
                                className="px-6 py-4 md:px-10 md:py-5 bg-black text-white text-sm md:text-lg font-bold uppercase tracking-widest rounded-full hover:scale-105 hover:bg-white hover:text-black transition-all shadow-xl w-full md:w-auto"
                            >
                                Volver al Sitio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManifestoModal;