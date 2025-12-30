'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
    // Evitar scroll cuando el modal está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    // Aquí pegaremos tu URL de Calendly más adelante
    const CALENDLY_URL = "https://calendly.com/TU-USUARIO/TU-EVENTO";

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop (Fondo oscuro borroso) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                    >
                        <div className="w-full max-w-5xl h-[85vh] bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative pointer-events-auto flex flex-col">

                            {/* Header del Modal */}
                            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#111]">
                                <h3 className="text-white font-display text-lg">Agendar Sesión de Estrategia</h3>
                                <button
                                    onClick={onClose}
                                    className="p-2 bg-white/5 rounded-full hover:bg-lime-400 hover:text-black transition-colors text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Iframe de Calendly */}
                            <div className="flex-1 bg-white relative">
                                {/* Loader visual mientras carga */}
                                <div className="absolute inset-0 flex items-center justify-center bg-[#111] -z-10">
                                    <span className="animate-pulse text-gray-500">Cargando agenda...</span>
                                </div>

                                <iframe
                                    src={CALENDLY_URL}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    title="Calendly Scheduling Page"
                                ></iframe>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;