// app/layout.js
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
  authors: [{ name: 'MADA Team', url: SITE_URL }],
  generator: 'Next.js',
  keywords: [
    'Agencia de Marketing Digital',
    'Desarrollo Web México',
    'Diseño Web',
    'SEO',
    'Posicionamiento Web',
    'E-commerce',
    'Branding',
    'Landing Pages'
  ],
  creator: 'MADA Agency',
  publisher: 'MADA Agency',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'MADA | Transformamos tu presencia digital',
    description: 'No hacemos simples sitios web. Creamos ecosistemas digitales que venden. Diseño sensorial, velocidad extrema y estrategias de crecimiento.',
    url: SITE_URL,
    siteName: 'MADA Agency',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'MADA Agencia Digital - Desarrollo Web y Marketing',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MADA | Agencia Digital',
    description: 'Creamos experiencias web que no solo se ven bien, sino que sienten. Diseño sensorial para marcas valientes.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  verification: {
    google: '',
  },
};


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'MADA',
  image: `${SITE_URL}/logo.png`,
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
    'https://www.instagram.com/somosmada', // TODO: Tus redes reales
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