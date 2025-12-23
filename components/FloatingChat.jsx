'use client';
import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, Zap, Code, BarChart } from 'lucide-react';

const FloatingChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [selectedInterest, setSelectedInterest] = useState(null);

    // --- LÓGICA DE TIEMPO MODIFICADA ---
    useEffect(() => {
        let hideTimer; // Variable para guardar la referencia del segundo timer

        // 1. Timer para MOSTRAR el mensaje (2.5 segundos después de cargar)
        const showTimer = setTimeout(() => {
            if (!hasInteracted) {
                setShowTooltip(true);

                // 2. Timer para OCULTAR el mensaje (5 segundos después de aparecer)
                hideTimer = setTimeout(() => {
                    setShowTooltip(false);
                }, 5000); // 5000ms = 5 segundos visibles
            }
        }, 2500);

        // Limpieza: Si el usuario abre el chat o sale de la página, cancelamos ambos timers
        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, [hasInteracted]);
    // ------------------------------------

    const handleOpen = () => {
        setIsOpen(!isOpen);
        setShowTooltip(false); // Aseguramos que se oculte al abrir
        setHasInteracted(true); // Esto cancela los timers gracias al useEffect
    };

    const handleStartChat = () => {
        const phone = "5215555555555";
        let message = "Hola EventoClic, quiero escalar mi negocio.";

        if (selectedInterest === 'web') message = "Hola, me interesa una Landing Page de alto impacto o Sitio Web.";
        if (selectedInterest === 'app') message = "Hola, tengo una idea para una App/Plataforma y quiero desarrollarla.";
        if (selectedInterest === 'marketing') message = "Hola, necesito estrategias de Marketing y embudos de venta.";

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end gap-4 font-sans text-black pointer-events-none">

            {/* 1. INTERFAZ DE CHAT */}
            <div
                className={`
          pointer-events-auto 
          bg-white w-[340px] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right border border-gray-100
          ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10'}
        `}
            >
                {/* Header */}
                <div className="bg-black p-5 flex justify-between items-start text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="relative">
                            <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center text-black font-black text-lg">EC</div>
                            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-black rounded-full animate-pulse"></span>
                        </div>
                        <div>
                            <h4 className="font-bold text-base leading-tight">Estrategia Digital</h4>
                            <p className="text-xs text-lime-400 font-medium mt-1">● Disponible ahora</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors z-10">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-5 bg-gray-50 flex flex-col gap-4">
                    <div className="bg-white p-4 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl shadow-sm border border-gray-100 text-sm text-gray-700 leading-relaxed">
                        <p className="font-bold text-black mb-1">Analicemos tu proyecto. 🚀</p>
                        No hacemos sitios simples, construimos activos digitales. ¿En qué podemos ayudarte hoy?
                    </div>

                    <div className="grid grid-cols-1 gap-2 mt-2">
                        <button onClick={() => setSelectedInterest('web')} className={`flex items-center gap-3 p-3 rounded-xl border text-sm font-medium transition-all ${selectedInterest === 'web' ? 'bg-black text-white border-black' : 'bg-white border-gray-200 hover:border-lime-400 hover:bg-lime-50 text-gray-600'}`}>
                            <Zap size={18} className={selectedInterest === 'web' ? 'text-lime-400' : 'text-gray-400'} /> Web & Landing
                        </button>
                        <button onClick={() => setSelectedInterest('app')} className={`flex items-center gap-3 p-3 rounded-xl border text-sm font-medium transition-all ${selectedInterest === 'app' ? 'bg-black text-white border-black' : 'bg-white border-gray-200 hover:border-lime-400 hover:bg-lime-50 text-gray-600'}`}>
                            <Code size={18} className={selectedInterest === 'app' ? 'text-lime-400' : 'text-gray-400'} /> Apps
                        </button>
                        <button onClick={() => setSelectedInterest('marketing')} className={`flex items-center gap-3 p-3 rounded-xl border text-sm font-medium transition-all ${selectedInterest === 'marketing' ? 'bg-black text-white border-black' : 'bg-white border-gray-200 hover:border-lime-400 hover:bg-lime-50 text-gray-600'}`}>
                            <BarChart size={18} className={selectedInterest === 'marketing' ? 'text-lime-400' : 'text-gray-400'} /> Marketing
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-white border-t border-gray-100">
                    <button
                        onClick={handleStartChat}
                        disabled={!selectedInterest}
                        className={`w-full py-3.5 rounded-full flex items-center justify-center gap-2 font-bold uppercase tracking-wide text-xs transition-all duration-300 ${selectedInterest ? 'bg-lime-400 text-black hover:bg-black hover:text-white hover:shadow-lg cursor-pointer transform hover:-translate-y-1' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                    >
                        <span>Hablar con un Especialista</span>
                        <Send size={14} />
                    </button>
                    <p className="text-[10px] text-center text-gray-400 mt-3">Respuesta promedio: <span className="text-black font-medium">Inmediata</span></p>
                </div>
            </div>

            {/* 2. TOOLTIP DE VENTA (Mensaje Flotante) */}
            <div
                className={`
          pointer-events-auto
          bg-black text-white px-5 py-3 rounded-full shadow-2xl text-xs font-bold uppercase tracking-wider
          transition-all duration-500 transform flex items-center gap-2
          ${showTooltip && !isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none absolute'}
        `}
            >
                ¿Tu web vende o solo existe? 🔥
                <div className="absolute -bottom-1 right-6 w-3 h-3 bg-black transform rotate-45"></div>
            </div>

            {/* 3. FAB (Botón Flotante) */}
            <button aria-label="Botón de chat"
                onClick={handleOpen}
                className={`
          pointer-events-auto
          group relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 z-50
          ${isOpen ? 'bg-white text-black rotate-180' : 'bg-black text-white hover:bg-lime-400 hover:text-black hover:scale-110'}
        `}
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full bg-lime-400 opacity-20"></span>
                )}
            </button>
        </div>
    );
};

export default FloatingChat;