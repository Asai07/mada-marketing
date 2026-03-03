import PreciosClient from './PreciosClient';

const SITE_URL = 'https://somosmada.com';
const PAGE_PATH = '/precios';
const IMAGE_URL = `${SITE_URL}/social-preview.png`;

export const metadata = {
    title: 'Planes y Precios | Inversión en Desarrollo Web y Marketing Digital',
    description: 'Conoce los planes Ignition ($5,900), Momentum ($12,500) y Singularity de MADA. Precios transparentes, sin sorpresas. Agencia web en Monterrey.',
    alternates: {
        canonical: `${SITE_URL}${PAGE_PATH}`,
    },
    openGraph: {
        title: 'Planes y Precios | MADA Agencia Digital',
        description: 'Inversión clara y directa. Desde $5,900 MXN para emprendedores hasta proyectos a medida para marcas líderes.',
        url: `${SITE_URL}${PAGE_PATH}`,
        siteName: 'MADA Agency',
        images: [{ url: IMAGE_URL, width: 1200, height: 630, alt: 'Planes y Precios MADA' }],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Planes y Precios | MADA',
        description: 'Precios transparentes para tu sitio web profesional.',
        images: [IMAGE_URL],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Planes de Desarrollo Web y Marketing Digital — MADA',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@type': 'Offer',
                name: 'Plan Ignition',
                description: 'Landing Page de alto impacto para validar ideas con presencia profesional inmediata. Entrega en 5-7 días.',
                price: '5900',
                priceCurrency: 'MXN',
                availability: 'https://schema.org/InStock',
                seller: { '@type': 'Organization', name: 'MADA', url: SITE_URL },
            },
        },
        {
            '@type': 'ListItem',
            position: 2,
            item: {
                '@type': 'Offer',
                name: 'Plan Momentum',
                description: 'Sitio web multi-sección con CMS, SEO técnico y Google Analytics para PyMES que buscan escalar.',
                price: '12500',
                priceCurrency: 'MXN',
                availability: 'https://schema.org/InStock',
                seller: { '@type': 'Organization', name: 'MADA', url: SITE_URL },
            },
        },
        {
            '@type': 'ListItem',
            position: 3,
            item: {
                '@type': 'Offer',
                name: 'Plan Singularity',
                description: 'Arquitectura 100% personalizada para marcas líderes, e-commerce y plataformas digitales complejas.',
                price: '25000',
                priceCurrency: 'MXN',
                availability: 'https://schema.org/InStock',
                seller: { '@type': 'Organization', name: 'MADA', url: SITE_URL },
            },
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
            <PreciosClient />
        </>
    );
}
