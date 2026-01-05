import './globals.css';
import { Inter, Space_Grotesk, Syne } from 'next/font/google';
import HeaderManager from '@/components/HeaderManager';
import CustomCursor from '@/components/CustomCursor';
import FloatingChat from '@/components/FloatingChat';
import { UIProvider } from '@/context/UIContext';
import SmoothScroll from '@/components/SmoothScroll';

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

const SITE_URL = 'https://somosmada.com';
const SITE_NAME = 'MADA | Agencia de Desarrollo Web y Marketing Digital';
const SITE_DESCRIPTION = 'Impulsa tu marca con MADA. Creamos sitios web de alto impacto, estrategias de marketing digital y experiencias de usuario que convierten visitantes en clientes.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: 'MADA Agency',
  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'MADA Agency',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'MADA - Agencia de Desarrollo Web y Marketing',
      },
    ],
  },

  // 2. TWITTER / X
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/social-preview.png'],
  },

  verification: {
    google: 'mp_3c6jUW-Mcs6gENnz4NyIvPVIJpxL4gFNNPdpOeS0',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'MADA',
  // Usamos la imagen grande para los resultados enriquecidos de Google
  image: `${SITE_URL}/social-preview.png`,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: '+528180114561',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Monterrey',
    addressRegion: 'NL',
    addressCountry: 'MX'
  },
  priceRange: '$$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  ],
  sameAs: [
    'https://www.instagram.com/somosmada',
    'https://www.linkedin.com/company/somosmada',
    'https://www.facebook.com/somosmada'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${syne.variable}`}>
        <UIProvider>
          <CustomCursor />
          <HeaderManager />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <FloatingChat />
          {/* Inyectamos JSON-LD para Google */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </UIProvider>
      </body>
    </html>
  );
}