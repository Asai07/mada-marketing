'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const handleLetsTalk = () => {
    const phone = "528180114561";
    const message = encodeURIComponent("Hola, vengo de su sitio web y me gustaría información.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
};

const Navbar = ({ onMenuClick }) => {
    const pathname = usePathname();

    const handleLogoClick = (e) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center mix-blend-difference text-white">

            <Link
                href="/"
                onClick={handleLogoClick} // <--- 4. Asignamos la función aquí
                className="text-xl font-display font-bold tracking-tighter cursor-pointer relative z-50 hover:opacity-80 transition-opacity"
            >
                MADA<span className="text-lime-400">.</span>
            </Link>

            <div className="flex items-center gap-6 md:gap-8">
                <button
                    onClick={handleLetsTalk}
                    aria-label="Hablemos"
                    className="text-xs font-bold uppercase tracking-widest border border-white px-3 py-2 md:px-5 hover:bg-white hover:text-black transition-all"
                >
                    Hablemos
                </button>

                <button aria-label="Botón de menú"
                    onClick={onMenuClick}
                    className="group flex items-center gap-3 text-xs font-body uppercase tracking-widest hover:text-lime-400 transition-colors"
                >
                    <span className="hidden md:block">Menu</span>
                    <div className="space-y-1">
                        <div className="w-6 h-[1px] bg-white group-hover:bg-lime-400 transition-colors"></div>
                        <div className="w-4 h-[1px] bg-white group-hover:bg-lime-400 transition-colors ml-auto"></div>
                    </div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;