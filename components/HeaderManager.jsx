'use client';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Menu from './Menu';

export default function HeaderManager() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Navbar onMenuClick={() => setIsMenuOpen(true)} />
            <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}