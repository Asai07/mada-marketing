import DesarrolloWebClient from './DesarrolloWeb';

const SITE_URL = 'https://somosmada.com';
const PAGE_PATH = '/servicios/desarrollo-web';
const IMAGE_URL = `${SITE_URL}/social-preview.png`;

// 1. METADATOS TÉCNICOS Y DE NEGOCIO
export const metadata = {
    title: 'Agencia de Desarrollo Web y Programación a Medida | Next.js Experts',
    description: 'Desarrollamos sitios web ultra-rápidos y aplicaciones web escalables con Next.js y React. Sin plantillas lentas. Especialistas en SEO Técnico y UX en Monterrey.',
    alternates: {
        canonical: PAGE_PATH,
    },
    openGraph: {
        title: 'MADA | Desarrollo Web a Medida y Alto Rendimiento',
        description: 'Tu sitio web debería ser tu mejor vendedor. Creamos experiencias digitales veloces y optimizadas para Google con tecnología moderna (Next.js).',
        url: `${SITE_URL}${PAGE_PATH}`,
        siteName: 'MADA Agency',
        images: [
            {
                url: IMAGE_URL,
                width: 1200,
                height: 630,
                alt: 'Desarrollo Web Profesional MADA',
            },
        ],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Desarrollo Web Next.js | MADA',
        description: 'Sitios web rápidos y optimizados para conversión.',
        images: [IMAGE_URL],
    },
    keywords: ['Desarrollo Web Monterrey', 'Agencia Next.js', 'Programación React', 'Diseño Web a medida', 'SEO Técnico'],
};

// 2. DATOS ESTRUCTURADOS (SCHEMA.ORG) PARA SERVICIOS TÉCNICOS
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Desarrollo y Diseño Web',
    provider: {
        '@type': 'ProfessionalService',
        name: 'MADA',
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Monterrey',
            addressRegion: 'NL',
            addressCountry: 'MX'
        },
        sameAs: [
            'https://www.instagram.com/somosmada',
            'https://www.facebook.com/somosmada'
        ]
    },
    areaServed: {
        '@type': 'Country',
        name: 'México'
    },
    // Catálogo de ofertas técnicas
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Desarrollo de Software',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Desarrollo Web a Medida (Custom)',
                    description: 'Desarrollo frontend avanzado con Next.js y Tailwind CSS para máxima velocidad y personalización.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Optimización SEO Técnico',
                    description: 'Mejora de Core Web Vitals, estructura semántica y velocidad de carga para posicionamiento orgánico.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Aplicaciones Web Progresivas (PWA)',
                    description: 'Sitios web que funcionan como aplicaciones nativas, ideales para negocios y herramientas internas.'
                }
            }
        ]
    }
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <DesarrolloWebClient />
        </>
    );
}