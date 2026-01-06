'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Loader2, Zap, Layout, Search, ArrowRight, Layers, Smartphone, Sparkles, User, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
// --- COMPONENTE DE INPUT (Simplificado) ---
const InputField = ({ label, icon: Icon, ...props }) => (
    <div className="space-y-1.5">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 flex items-center gap-1.5">
            {Icon && <Icon size={12} className="text-gray-400" />} {label}
        </label>
        <input
            {...props}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-black font-medium placeholder:text-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 transition-all caret-lime-500 text-sm"
        />
    </div>
);

// --- TARJETA DE SELECCIÓN ---
const SelectionCard = ({ icon: Icon, label, selected, onClick }) => (
    <div
        onClick={onClick}
        className={`cursor-pointer p-3 rounded-xl border transition-all duration-200 flex flex-col items-center justify-center gap-2 text-center h-24
        ${selected
                ? 'bg-black text-white border-black shadow-lg transform scale-[1.02]'
                : 'bg-white border-gray-100 text-gray-500 hover:border-lime-400 hover:bg-lime-50 hover:text-black'
            }`}
    >
        <Icon size={22} className={selected ? 'text-lime-400' : 'text-current'} />
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide leading-tight">{label}</span>
    </div>
);

const BookingModal = ({ isOpen, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        plan: ''
    });

    const showWebPlans = formData.service === 'Web / Landing';

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setIsSubmitted(false);
                setIsLoading(false);
                setError(null);
                setFormData({ name: '', email: '', phone: '', service: '', plan: '' });
                setPrivacyAccepted(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Bloqueo de scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleServiceSelect = (val) => {
        setFormData(prev => ({
            ...prev,
            service: val,
            plan: val !== 'Web / Landing' ? '' : prev.plan
        }));
    };

    const handlePlanSelect = (val) => {
        setFormData(prev => ({ ...prev, plan: val }));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        if (!formData.service) {
            setError("Por favor selecciona qué necesitas (Web, App o Marketing).");
            setIsLoading(false);
            return;
        }
        if (!privacyAccepted) {
            setError("Debes aceptar la política de privacidad para continuar.");
            setIsLoading(false);
            return;
        }

        const serviceMessage = formData.plan
            ? `${formData.service} (Plan: ${formData.plan})`
            : formData.service;

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: serviceMessage,
            website: 'No especificado',
            to_email: 'somosmadamkt@gmail.com'
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            setIsSubmitted(true);
        } catch (err) {
            console.error("Error:", err);
            setError("Hubo un error al enviar. Intenta de nuevo.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[4999] cursor-pointer"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        className="fixed inset-0 z-[5000] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                    >
                        <div
                            data-lenis-prevent
                            className="w-full max-w-lg bg-white rounded-3xl shadow-2xl relative flex flex-col max-h-[90vh] pointer-events-auto overflow-hidden"
                        >
                            {/* HEADER LIMPIO */}
                            <div className="bg-black p-6 md:p-8 flex justify-between items-start text-white relative overflow-hidden shrink-0">
                                {/* Decoración sutil de fondo */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-lime-400/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

                                <div className="relative z-10 pr-8">
                                    <h3 className="font-display text-2xl font-bold leading-tight">
                                        {isSubmitted ? '¡Todo Listo!' : 'Hablemos de tu Proyecto'}
                                    </h3>
                                    {!isSubmitted && (
                                        <p className="text-white text-sm mt-3 leading-relaxed font-light">
                                            Déjanos tus datos para coordinar una <strong> llamada de 15 minutos</strong> y aterrizar tus ideas.                                        </p>
                                    )}
                                </div>

                                <button
                                    onClick={onClose}
                                    className="relative z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* BODY */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar bg-white p-6 md:p-8">
                                <AnimatePresence mode='wait'>
                                    {!isSubmitted ? (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-6"
                                        >
                                            {/* SECCIÓN 1: DATOS */}
                                            <div className="space-y-4"> {/* Aumenté un poco el espacio */}
                                                <h4 className="text-xs font-bold text-black uppercase tracking-wide border-b border-gray-100 pb-2 mb-3">
                                                    1. Tus Datos
                                                </h4>
                                                <div className="grid grid-cols-1 gap-3">
                                                    <InputField
                                                        label="Nombre" icon={User}
                                                        required name="name" type="text" onChange={handleChange} value={formData.name}
                                                        placeholder="Tu nombre completo"
                                                    />
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <InputField
                                                            label="Email" icon={Mail}
                                                            required name="email" type="email" onChange={handleChange} value={formData.email}
                                                            placeholder="tu@email.com"
                                                        />
                                                        <div>
                                                            <InputField
                                                                label="WhatsApp" icon={Phone}
                                                                required name="phone" type="tel" onChange={handleChange} value={formData.phone}
                                                                placeholder="WhatsApp (52...)"
                                                            />
                                                            {/* MICRO-COPY DE CONFIANZA */}
                                                            <p className="text-[9px] text-gray-400 mt-1 ml-1 leading-tight">
                                                                *Te escribiremos solo para agendar.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* SECCIÓN 2: SERVICIO */}
                                            <div className="space-y-3">
                                                <h4 className="text-xs font-bold text-black uppercase tracking-wide border-b border-gray-100 pb-2 mb-3">
                                                    2. ¿Qué servicio te interesa?
                                                </h4>
                                                <div className="grid grid-cols-3 gap-2">
                                                    <SelectionCard
                                                        icon={Layout}
                                                        label="Web / Landing"
                                                        selected={formData.service === 'Web / Landing'}
                                                        onClick={() => handleServiceSelect('Web / Landing')}
                                                    />
                                                    <SelectionCard
                                                        icon={Smartphone}
                                                        label="App Móvil"
                                                        selected={formData.service === 'App Móvil'}
                                                        onClick={() => handleServiceSelect('App Móvil')}
                                                    />
                                                    <SelectionCard
                                                        icon={Search}
                                                        label="Marketing"
                                                        selected={formData.service === 'Marketing / SEO'}
                                                        onClick={() => handleServiceSelect('Marketing / SEO')}
                                                    />
                                                </div>
                                            </div>

                                            {/* SECCIÓN 3: PLANES (OPCIONAL) */}
                                            <AnimatePresence>
                                                {showWebPlans && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 mt-2">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <Layers size={14} className="text-lime-600" />
                                                                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">¿Tienes un plan en mente? (Opcional)</h4>
                                                            </div>
                                                            <div className="grid grid-cols-3 gap-2">
                                                                {['IGNITION', 'MOMENTUM', 'SINGULARITY'].map((plan) => (
                                                                    <button
                                                                        key={plan}
                                                                        type="button"
                                                                        onClick={() => handlePlanSelect(plan)}
                                                                        className={`py-2 px-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-lg border transition-all
                                                                        ${formData.plan === plan
                                                                                ? 'bg-black text-white border-black'
                                                                                : 'bg-white border-gray-200 text-gray-400 hover:border-gray-400 hover:text-black'}`}
                                                                    >
                                                                        {plan}
                                                                    </button>
                                                                ))}
                                                            </div>

                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                            <div className="flex items-start gap-3 py-2 mt-4"> {/* Agregué mt-4 para separar un poco */}
                                                <div className="relative flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id="privacy"
                                                        checked={privacyAccepted}
                                                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                                                        className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 transition-all checked:border-black checked:bg-black hover:border-black"
                                                    />
                                                    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <label htmlFor="privacy" className="cursor-pointer select-none text-[10px] sm:text-xs text-gray-500 leading-tight">
                                                    He leído y acepto la <a href="/privacidad" target="_blank" className="font-bold text-black underline hover:text-lime-500">Política de Privacidad</a> y el tratamiento de mis datos.
                                                </label>
                                            </div>
                                            {/* ERROR */}
                                            {error && (
                                                <div className="p-3 bg-red-50 text-red-500 text-xs font-medium rounded-lg flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                                    {error}
                                                </div>
                                            )}

                                            {/* BOTÓN */}
                                            <div className="pt-2">
                                                <button
                                                    type="submit"
                                                    disabled={isLoading}
                                                    className="w-full py-4 bg-lime-400 hover:bg-lime-500 active:scale-[0.99] text-black font-bold uppercase tracking-widest text-xs rounded-xl transition-all shadow-xl shadow-lime-400/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:shadow-none"
                                                >
                                                    {isLoading ? <Loader2 className="animate-spin" /> : (
                                                        <>Agendar Llamada <ArrowRight size={16} /></>
                                                    )}
                                                </button>
                                            </div>

                                        </motion.form>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col items-center justify-center py-8 text-center space-y-6"
                                        >
                                            <div className="relative">
                                                <div className="w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center">
                                                    <Check size={32} className="text-lime-600" />
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 p-1.5 bg-black rounded-full text-white border-2 border-white">
                                                    <Sparkles size={12} />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <h4 className="text-xl font-display font-bold text-black">¡Datos Recibidos!</h4>
                                                <p className="text-gray-500 text-sm max-w-[280px] mx-auto leading-relaxed">
                                                    Te llamaremos al número que nos compartiste en breve.
                                                </p>
                                            </div>


                                            <div className="flex gap-3 justify-center w-full">
                                                <button
                                                    onClick={onClose}
                                                    className="px-6 py-3 border border-gray-200 text-gray-500 rounded-xl text-xs font-bold uppercase hover:bg-gray-50 transition-colors"
                                                >
                                                    Cerrar
                                                </button>
                                                <a
                                                    href="#proyectos"
                                                    onClick={onClose}
                                                    className="px-6 py-3 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center gap-2"
                                                >
                                                    Ver Proyectos <ArrowRight size={14} />
                                                </a>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;