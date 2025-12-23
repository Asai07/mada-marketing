'use client';

import React, { useState } from 'react';
import { useUI } from '@/context/UIContext'; // <--- 1. Importamos esto
import { useIsMobile } from '@/hooks/useIsMobile';
import SectionWrapper from '@/components/SectionWrapper';
import ManifestoModal from '@/components/ManifestoModal';

// Secciones
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import MarketingScrolly from '@/components/MarketingScrolly';
import Services from '@/components/Services';
import PricingSection from '@/components/PricingSection';
import InfoBento from '@/components/InfoBento';
import Work from '@/components/Work';
import Contact from '@/components/Contact';

export default function Home() {
  const { theme } = useUI(); // <--- 2. Sacamos el tema actual
  const isMobile = useIsMobile();
  const [showManifesto, setShowManifesto] = useState(false);

  return (
    <main
      // 3. Aplicamos la transición suave y los colores dinámicos
      className="min-h-screen transition-colors duration-700 ease-in-out selection:bg-lime-400 selection:text-black"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <ManifestoModal isOpen={showManifesto} onClose={() => setShowManifesto(false)} />

      <SectionWrapper bg="#050505" text="#ffffff">
        <Hero />
      </SectionWrapper>

      <SectionWrapper bg="#ffffff" text="#000000">
        <Manifesto isMobile={isMobile} onOpenManifesto={() => setShowManifesto(true)} />
      </SectionWrapper>

      <SectionWrapper bg="#000000" text="#ffffff">
        <MarketingScrolly />
      </SectionWrapper>

      <SectionWrapper bg="#ffffff" text="#000000">
        <PricingSection />
      </SectionWrapper>

      <SectionWrapper bg="#0a0a0a" text="#ffffff">
        <Services isMobile={isMobile} />
      </SectionWrapper>

      <SectionWrapper bg="#ffffff" text="#000000">
        <InfoBento isMobile={isMobile} />
      </SectionWrapper>

      <SectionWrapper bg="#bef264" text="#000000">
        <Work isMobile={isMobile} />
      </SectionWrapper>

      <SectionWrapper bg="#050505" text="#ffffff">
        <Contact />
      </SectionWrapper>
    </main>
  );
}