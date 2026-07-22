import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import { Space_Grotesk, Syne } from 'next/font/google';
import PublicElements from '@/components/PublicElements';
import CustomCursor from '@/components/CustomCursor';
import { UIProvider } from '@/context/UIContext';
import SmoothScroll from '@/components/SmoothScroll';

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
    canonical: SITE_URL,
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'MADA',
  image: [`${SITE_URL}/social-preview.png`],
  logo: `${SITE_URL}/social-preview.png`,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: `+${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
  email: 'hola@somosmada.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Monterrey',
    addressRegion: 'NL',
    addressCountry: 'MX'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.6866',
    longitude: '-100.3161'
  },
  areaServed: {
    '@type': 'City',
    name: 'Monterrey'
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
    'https://www.instagram.com/mada.webstudio',
    'https://www.facebook.com/mada.webstudio',
  ],

};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MADA Agency',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preload" href="/noise.svg" as="image" type="image/svg+xml" />
      </head>
      <body className={`${spaceGrotesk.variable} ${syne.variable}`}>
        <UIProvider>
          <CustomCursor />
          <PublicElements />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
        </UIProvider>
      </body>
      <GoogleAnalytics gaId="G-DHZLTBYXS3" />
      <GoogleTagManager gtmId="GTM-P7PTVBDC" />
    </html>
  );
}