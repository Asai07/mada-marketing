import MarketingClient from './MarketingClient';

const SITE_URL = 'https://somosmada.com';
const PAGE_PATH = '/servicios/marketing-digital';
const IMAGE_URL = `${SITE_URL}/social-preview.png`;

// 1. METADATOS AVANZADOS
export const metadata = {
    title: 'Agencia de Marketing Digital y Google Ads | Resultados y ROI',
    description: 'Maximizamos tu inversión publicitaria. Estrategias avanzadas de Google Ads, Meta Ads y Performance Marketing enfocadas en ventas reales, no solo en clics.',
    alternates: {
        canonical: PAGE_PATH,
    },
    openGraph: {
        title: 'MADA | Agencia de Performance y Marketing Digital',
        description: 'Deja de perder dinero en anuncios. Gestionamos campañas de alto rendimiento en Google y Meta.',
        url: `${SITE_URL}${PAGE_PATH}`,
        siteName: 'MADA Agency',
        images: [
            {
                url: IMAGE_URL,
                width: 1200,
                height: 630,
                alt: 'Estrategia de Marketing Digital MADA',
            },
        ],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Agencia de Marketing Digital | MADA',
        description: 'Estrategias de ROI y Performance Marketing.',
        images: [IMAGE_URL],
    },
};

// 2. DATOS ESTRUCTURADOS (SCHEMA.ORG)
// Esto ayuda a Google a entender que esta página "vende" un servicio específico.
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Marketing Digital y Publicidad',
    provider: {
        '@type': 'ProfessionalService',
        name: 'MADA',
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`, // Asegúrate de tener tu logo accesible
        sameAs: [
            'https://www.instagram.com/somosmada',
            'https://www.facebook.com/somosmada'
        ]
    },
    areaServed: {
        '@type': 'Country',
        name: 'México'
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Publicidad',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Gestión de Google Ads (SEM)',
                    description: 'Campañas de búsqueda y display optimizadas para conversión.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Publicidad en Redes Sociales (Social Ads)',
                    description: 'Estrategias en Meta Ads (Facebook/Instagram) y LinkedIn Ads.'
                }
            }
        ]
    }
};

export default function Page() {
    return (
        <>
            {/* Inyección del JSON-LD para Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <MarketingClient />
        </>
    );
}