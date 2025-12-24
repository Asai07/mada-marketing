'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "¿Por qué los precios son más altos que un freelancer promedio?",
        answer: "No somos freelancers, somos una agencia de ingeniería digital. No vendemos 'horas de trabajo', vendemos resultados, estrategia, SEO técnico avanzado y una infraestructura que no se romperá cuando tengas tráfico real."
    },
    {
        question: "¿Qué tecnología utilizan?",
        answer: "Nos especializamos en el JAMstack moderno: Next.js (React), Tailwind CSS para estilos y Framer Motion para interacciones. Esto garantiza sitios web drásticamente más rápidos y seguros que los hechos en WordPress o Wix."
    },
    {
        question: "¿Incluyen el hosting y dominio?",
        answer: "En el plan 'Ignition' incluimos el dominio por un año. Para todos los planes, configuramos el hosting en Vercel o Netlify (líderes mundiales), los cuales suelen tener capas gratuitas muy generosas para la mayoría de los negocios."
    },
    {
        question: "¿Cuánto tiempo tarda el desarrollo?",
        answer: "Depende del plan. El plan 'Ignition' se entrega en aprox. 5 días hábiles una vez recibido el contenido. 'Momentum' toma entre 2 a 3 semanas, y 'Singularity' depende totalmente del alcance del proyecto."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10 last:border-none">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={`text-lg md:text-xl font-display font-medium transition-colors duration-300 ${isOpen ? 'text-lime-400' : 'text-white group-hover:text-lime-200'}`}>
                    {question}
                </span>
                <span className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? 'border-lime-400 bg-lime-400 text-black rotate-180' : 'border-white/20 text-white group-hover:border-white'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-gray-400 leading-relaxed max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0); // El primero abierto por defecto

    return (
        <section className="py-20 md:py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-4 block">// Q&A</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Preguntas Frecuentes</h2>
                </motion.div>

                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;