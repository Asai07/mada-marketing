'use client';
import React from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

const Menu = ({ isOpen, onClose }) => {

    // Un solo array unificado: scroll anchors en home + páginas reales
    const menuItems = [
        { label: 'Manifiesto', type: 'scroll', id: 'manifesto' },
        { label: 'Proyectos', type: 'scroll', id: 'work' },
        { label: 'Servicios', type: 'page', href: '/servicios' },
        { label: 'Precios', type: 'page', href: '/precios' },
        { label: 'Nosotros', type: 'page', href: '/nosotros' },
        { label: 'Contacto', type: 'page', href: '/contacto' },
        { label: 'Agendar', type: 'action' },
    ];

    const handleNavigation = (e, item) => {
        e.preventDefault();
        onClose();

        setTimeout(() => {
            if (item.type === 'scroll') {
                const element = document.getElementById(item.id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else if (item.type === 'action') {
                window.dispatchEvent(new Event('open-booking-modal'));
            }
        }, 300);
    };

    return (
        <div className={`fixed inset-0 bg-[#0a0a0a] z-[100] transition-all duration-700 ease-[0.76,0,0.24,1] flex flex-col justify-center items-center ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
            <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-lime-400 transition-colors">
                <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col gap-3 md:gap-5 text-center px-4">
                {menuItems.map((item) => {
                    const className = "text-4xl md:text-7xl font-display font-bold text-transparent stroke-text-white hover:text-lime-400 hover:text-stroke-0 transition-all duration-300 transform hover:skew-x-[-10deg] cursor-pointer";

                    if (item.type === 'page') {
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={onClose}
                                className={className}
                            >
                                {item.label}
                            </Link>
                        );
                    }

                    return (
                        <a
                            key={item.label}
                            href={item.href ?? '#'}
                            onClick={(e) => handleNavigation(e, item)}
                            className={className}
                        >
                            {item.label}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Menu;
