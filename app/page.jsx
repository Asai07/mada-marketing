'use client';

import React, { useState, useEffect } from 'react';
import { useUI } from '@/context/UIContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import dynamic from 'next/dynamic';
import SectionWrapper from '@/components/SectionWrapper';


// Componentes
const Hero = dynamic(() => import('@/components/Hero'));
const ManifestoModal = dynamic(() => import('@/components/ManifestoModal'), { ssr: false });
const BookingModal = dynamic(() => import('@/components/BookingModal'), { ssr: false });
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

export default function Home() {
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

      {/* 2. MANIFESTO (Light) - Contraste fuerte para lectura */}
      <div id="manifesto">
        <SectionWrapper bg="#ffffff" text="#000000">
          <Manifesto isMobile={isMobile} onOpenManifesto={() => setShowManifesto(true)} />
        </SectionWrapper>
      </div>

      {/* 3. SERVICES (Dark) - "The Vessel". Las imágenes lucen mejor en oscuro */}
      <div id="services">
        <SectionWrapper bg="#0a0a0a" text="#ffffff">
          <Services isMobile={isMobile} />
        </SectionWrapper>
      </div>

      {/* 4. INFO BENTO (Light) - "The Stack". Ingeniería limpia sobre blanco */}
      <SectionWrapper bg="#ffffff" text="#000000">
        <InfoBento isMobile={isMobile} />
      </SectionWrapper>

      {/* 5. MARKETING (Dark) - "The Fuel". Gráficos neón resaltan en negro */}
      <SectionWrapper bg="#000000" text="#ffffff">
        <MarketingScrolly />
      </SectionWrapper>

      {/* 6. PROCESS (Gray/Light) - "The How". Clinical y estructurado */}
      <SectionWrapper bg="#f8fafc" text="#000000">
        <ProcessSection />
      </SectionWrapper>

      {/* 7. WORK (Lime) - "The Proof". Rompe el patrón visual para llamar la atención */}
      <div id="work">
        <SectionWrapper bg="#bef264" text="#000000">
          <Work isMobile={isMobile} />
        </SectionWrapper>
      </div>
      {/* 8. PRICING (White) - "The Ask". Claridad total para los precios */}
      <SectionWrapper bg="#ffffff" text="#000000">
        <PricingSection onOpenBooking={() => setShowBooking(true)} />
      </SectionWrapper>

      {/* 9. FAQ (Dark Gray) - "The Close". Elegante para resolver dudas */}
      <SectionWrapper bg="#111111" text="#ffffff">
        <FAQSection />
      </SectionWrapper>

      {/* 10. CONTACT (Dark) - Footer */}
      <SectionWrapper bg="#050505" text="#ffffff">
        <Contact />
      </SectionWrapper>
      <SectionWrapper bg="#050505" text="#ffffff">
        {/* Asegúrate de pasar la prop aquí 👇 */}
        <Footer onOpenBooking={() => setShowBooking(true)} />
      </SectionWrapper>
    </main>
  );
}