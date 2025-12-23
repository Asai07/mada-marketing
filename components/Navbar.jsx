'use client';
import React from 'react';

const Navbar = ({ onMenuClick }) => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
            <div className="text-xl font-display font-bold tracking-tighter cursor-pointer md:cursor-none">
                MADA<span className="text-lime-400">.</span>
            </div>

            <div className="flex items-center gap-6 md:gap-8">
                <button aria-label="Hablemos" className="hidden md:block text-xs font-bold uppercase tracking-widest border border-white px-5 py-2 hover:bg-white hover:text-black transition-all">
                    Hablemos
                </button>

                <button
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