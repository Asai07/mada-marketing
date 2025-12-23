'use client';
import React from 'react';
import { X } from 'lucide-react';

const Menu = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 bg-[#0a0a0a] z-[100] transition-all duration-700 ease-[0.76, 0, 0.24, 1] flex flex-col justify-center items-center ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
            <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-lime-400 transition-colors">
                <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-6 text-center px-4">
                {['Manifiesto', 'Proyectos', 'Servicios', 'Agendar'].map((item) => (
                    <a
                        key={item}
                        href="#"
                        onClick={onClose}
                        className="text-4xl md:text-8xl font-display font-bold text-transparent stroke-text-white hover:text-lime-400 hover:text-stroke-0 transition-all duration-300 transform hover:skew-x-[-10deg]"
                    >
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Menu;