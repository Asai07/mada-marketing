// app/layout.js
import './globals.css'; // Tus estilos de Tailwind
import { Inter, Space_Grotesk, Syne } from 'next/font/google';
import HeaderManager from '@/components/HeaderManager';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingChat from '@/components/FloatingChat';
import { UIProvider } from '@/context/UIContext';
import SmoothScroll from '@/components/SmoothScroll'; // Wrapper para Lenis (ver abajo)


// 2. CONFIGURAMOS LAS FUENTES
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-space',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${syne.variable}`}>
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