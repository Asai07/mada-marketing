'use client';
import React from 'react';
import { X } from 'lucide-react';

const Menu = ({ isOpen, onClose }) => {

    // Configuración de los links
    const menuItems = [
        { label: 'Manifiesto', id: 'manifesto', type: 'scroll' },
        { label: 'Proyectos', id: 'work', type: 'scroll' },
        { label: 'Servicios', id: 'services', type: 'scroll' },
        { label: 'Agendar', id: 'booking', type: 'action' } // Este es especial
    ];

    const handleNavigation = (e, item) => {
        e.preventDefault();
        onClose(); // 1. Cerramos el menú primero para que se vea la web

        setTimeout(() => {
            if (item.type === 'scroll') {
                // LÓGICA DE SCROLL SUAVE
                const element = document.getElementById(item.id);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else if (item.type === 'action') {
                // LÓGICA PARA ABRIR EL MODAL (Disparamos el evento personalizado)
                window.dispatchEvent(new Event('open-booking-modal'));
            }
        }, 300); // Pequeño delay para dejar que la animación del menú termine (opcional pero se ve pro)
    };

    return (
        <div className={`fixed inset-0 bg-[#0a0a0a] z-[100] transition-all duration-700 ease-[0.76, 0, 0.24, 1] flex flex-col justify-center items-center ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
            <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-lime-400 transition-colors">
                <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col gap-6 text-center px-4">
                {menuItems.map((item) => (
                    <a
                        key={item.label}
                        href={`#${item.id}`}
                        onClick={(e) => handleNavigation(e, item)}
                        className="text-4xl md:text-8xl font-display font-bold text-transparent stroke-text-white hover:text-lime-400 hover:text-stroke-0 transition-all duration-300 transform hover:skew-x-[-10deg] cursor-pointer"
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Menu;