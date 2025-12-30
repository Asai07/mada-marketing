'use client';

import React, { useState, useEffect } from 'react';
import { useUI } from '@/context/UIContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import dynamic from 'next/dynamic';
import SectionWrapper from '@/components/SectionWrapper';

// --- IMPORTS DINÁMICOS ---
// Hero se carga normal (o dinámico sin ssr: false) para que aparezca rápido
const Hero = dynamic(() => import('@/components/Hero'));

// Modales interactivos (SSR: false para evitar errores de hidratación "Application Error")
const ManifestoModal = dynamic(() => import('@/components/ManifestoModal'), { ssr: false });
const BookingModal = dynamic(() => import('@/components/BookingModal'), { ssr: false });

// Secciones de contenido
const Manifesto = dynamic(() => import('@/components/Manifesto'));
const Services = dynamic(() => import('@/components/Services'));
const InfoBento = dynamic(() => import('@/components/InfoBento'));
const MarketingScrolly = dynamic(() => import('@/components/MarketingScrolly'));
const ProcessSection = dynamic(() => import('@/components/ProcessSection'));
const Work = dynamic(() => import('@/components/Work'));
const PricingSection = dynamic(() => import('@/components/PricingSection'));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function HomeClient() {
    const { theme } = useUI();
    const isMobile = useIsMobile();
    const [showManifesto, setShowManifesto] = useState(false);
    const [showBooking, setShowBooking] = useState(false);

    useEffect(() => {
        const handleOpenBooking = () => setShowBooking(true);
        window.addEventListener('open-booking-modal', handleOpenBooking);
        return () => window.removeEventListener('open-booking-modal', handleOpenBooking);
    }, []);

    return (
        <main
            className="min-h-screen w-full transition-colors duration-700 ease-in-out selection:bg-lime-400 selection:text-black"
            style={{ backgroundColor: theme.bg, color: theme.text }}
        >
            <ManifestoModal isOpen={showManifesto} onClose={() => setShowManifesto(false)} />
            <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} />

            {/* 1. HERO (Dark) */}
            <SectionWrapper bg="#050505" text="#ffffff">
                <Hero onOpenBooking={() => setShowBooking(true)} />
            </SectionWrapper>

            {/* 2. MANIFESTO (Light) */}
            <div id="manifesto">
                <SectionWrapper bg="#ffffff" text="#000000">
                    <Manifesto isMobile={isMobile} onOpenManifesto={() => setShowManifesto(true)} />
                </SectionWrapper>
            </div>

            {/* 3. SERVICES (Dark) */}
            <div id="services">
                <SectionWrapper bg="#0a0a0a" text="#ffffff">
                    <Services isMobile={isMobile} />
                </SectionWrapper>
            </div>

            {/* 4. INFO BENTO (Light) */}
            <SectionWrapper bg="#ffffff" text="#000000">
                <InfoBento isMobile={isMobile} />
            </SectionWrapper>

            {/* 5. MARKETING (Dark) */}
            <SectionWrapper bg="#000000" text="#ffffff">
                <MarketingScrolly />
            </SectionWrapper>

            {/* 6. PROCESS (Gray/Light) */}
            <SectionWrapper bg="#f8fafc" text="#000000">
                <ProcessSection />
            </SectionWrapper>

            {/* 7. WORK (Lime) */}
            <div id="work">
                <SectionWrapper bg="#bef264" text="#000000">
                    <Work isMobile={isMobile} />
                </SectionWrapper>
            </div>

            {/* 8. PRICING (White) */}
            <SectionWrapper bg="#ffffff" text="#000000">
                <PricingSection onOpenBooking={() => setShowBooking(true)} />
            </SectionWrapper>

            {/* 9. FAQ (Dark Gray) */}
            <SectionWrapper bg="#111111" text="#ffffff">
                <FAQSection />
            </SectionWrapper>

            {/* 10. CONTACT (Dark) */}
            <SectionWrapper bg="#050505" text="#ffffff">
                <Contact />
            </SectionWrapper>

            <SectionWrapper bg="#050505" text="#ffffff">
                <Footer onOpenBooking={() => setShowBooking(true)} />
            </SectionWrapper>
        </main>
    );
}