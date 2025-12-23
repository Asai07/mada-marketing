// app/layout.js
import './globals.css'; // Tus estilos de Tailwind
import { Inter } from 'next/font/google'; // O tu fuente personalizada
import HeaderManager from '@/components/HeaderManager';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingChat from '@/components/FloatingChat';
import { UIProvider } from '@/context/UIContext';
import SmoothScroll from '@/components/SmoothScroll'; // Wrapper para Lenis (ver abajo)

const inter = Inter({ subsets: ['latin'] });

// AQUÍ VA TU SEO POTENTE (Reemplaza a Helmet)
export const metadata = {
  title: 'MADA | Agencia de Desarrollo Web y Marketing Digital',
  description: 'Impulsa tu marca con MADA. Creamos sitios web y landings de alto impacto.',
  openGraph: {
    title: 'MADA | Agencia Digital',
    description: 'Estrategias de marketing digital a tu medida.',
    url: 'https://somosmada.com',
    siteName: 'MADA',
    images: [
      {
        url: 'https://somosmada.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <UIProvider>
          {/* CustomCursor necesita 'use client', así que funciona bien si tiene la directiva */}
          <CustomCursor />
          <HeaderManager />

          {/* SmoothScroll envuelve a children para Lenis */}
          <SmoothScroll>
            {children}
          </SmoothScroll>

          <FloatingChat />
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}