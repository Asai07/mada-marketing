import ServiciosHubClient from './ServiciosHubClient';

const SITE_URL = 'https://somosmada.com';
const PAGE_PATH = '/servicios';
const IMAGE_URL = `${SITE_URL}/social-preview.png`;

export const metadata = {
    title: 'Servicios | Desarrollo Web, Marketing Digital y Diseño | MADA',
    description: 'Descubre todos los servicios de MADA: desarrollo web con Next.js, marketing digital, diseño estratégico y tiendas en línea. Agencia digital en Monterrey, Nuevo León.',
    alternates: {
        canonical: `${SITE_URL}${PAGE_PATH}`,
    },
    openGraph: {
        title: 'Servicios Digitales | MADA Agencia',
        description: 'Del diseño a la conversión. Conoce cómo MADA puede transformar tu presencia digital.',
        url: `${SITE_URL}${PAGE_PATH}`,
        siteName: 'MADA Agency',
        images: [{ url: IMAGE_URL, width: 1200, height: 630, alt: 'Servicios MADA Agencia Digital' }],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Servicios | MADA',
        description: 'Desarrollo web, marketing digital y más.',
        images: [IMAGE_URL],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Servicios — MADA Agencia Digital',
    url: `${SITE_URL}${PAGE_PATH}`,
    description: 'Catálogo completo de servicios digitales de MADA: desarrollo web, marketing digital, diseño estratégico y e-commerce.',
    hasPart: [
        {
            '@type': 'WebPage',
            name: 'Desarrollo Web a Medida',
            url: `${SITE_URL}/servicios/desarrollo-web`,
            description: 'Sitios web ultra-rápidos con Next.js y React. SEO técnico y optimización de Core Web Vitals.',
        },
        {
            '@type': 'WebPage',
            name: 'Marketing Digital y Estrategia',
            url: `${SITE_URL}/servicios/marketing-digital`,
            description: 'Estrategias de marketing digital para convertir visitantes en clientes. Campañas publicitarias y crecimiento de marca.',
        },
    ],
    mainEntity: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Agencia Digital',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Marketing Digital y Estrategia',
                    description: 'Estrategias integrales para convertir visitantes en clientes, gestión de campañas publicitarias y crecimiento de marca.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Desarrollo Web a Medida',
                    description: 'Sitios web profesionales desarrollados con Next.js, React y Tailwind CSS para máxima velocidad y SEO.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'SEO Técnico y Posicionamiento',
                    description: 'Optimización avanzada para motores de búsqueda, arquitectura de información y SEO local.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Plan Ignition',
                    description: 'Desarrollo web express para validación rápida. Entrega en 5 días hábiles.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Plan Momentum',
                    description: 'Sitio web corporativo robusto diseñado para escalar y posicionar tu marca.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Plan Singularity',
                    description: 'Soluciones digitales 100% personalizadas para proyectos complejos y aplicaciones web.'
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
            <ServiciosHubClient />
        </>
    );
}
