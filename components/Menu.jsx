'use client';
import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Menu = ({ isOpen, onClose }) => {

    // Links principales (scroll en home)
    const menuItems = [
        { label: 'Manifiesto', id: 'manifesto', type: 'scroll' },
        { label: 'Proyectos', id: 'work', type: 'scroll' },
        { label: 'Servicios', id: 'services', type: 'scroll' },
        { label: 'Agendar', id: 'booking', type: 'action' }
    ];

    // Links de páginas independientes (para SEO y navegación)
    const pageLinks = [
        { label: 'Servicios', href: '/servicios' },
        { label: 'Precios', href: '/precios' },
        { label: 'Nosotros', href: '/nosotros' },
        { label: 'Contacto', href: '/contacto' },
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

            {/* LINKS DE SCROLL (home) */}
            <div className="flex flex-col gap-4 md:gap-6 text-center px-4 mb-12">
                {menuItems.map((item) => (
                    <a
                        key={item.label}
                        href={`#${item.id}`}
                        onClick={(e) => handleNavigation(e, item)}
                        className="text-4xl md:text-7xl font-display font-bold text-transparent stroke-text-white hover:text-lime-400 hover:text-stroke-0 transition-all duration-300 transform hover:skew-x-[-10deg] cursor-pointer"
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            {/* LINKS DE PÁGINAS (SEO + navegación) */}
            <div className="border-t border-white/10 pt-8 flex flex-wrap justify-center gap-4 px-6">
                {pageLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className="flex items-center gap-1 text-xs text-gray-500 uppercase tracking-widest hover:text-lime-400 transition-colors"
                    >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Menu;