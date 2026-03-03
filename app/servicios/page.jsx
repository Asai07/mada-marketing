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
