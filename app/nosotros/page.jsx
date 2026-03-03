import NosotrosClient from './NosotrosClient';

const SITE_URL = 'https://somosmada.com';
const PAGE_PATH = '/nosotros';
const IMAGE_URL = `${SITE_URL}/social-preview.png`;

export const metadata = {
    title: 'Nosotros | Equipo y Filosofía de MADA — Agencia Digital Monterrey',
    description: 'Somos MADA: una agencia de desarrollo web y marketing digital en Monterrey. Conoce nuestra filosofía, valores y por qué construimos con intención.',
    alternates: {
        canonical: `${SITE_URL}${PAGE_PATH}`,
    },
    openGraph: {
        title: 'Quiénes Somos | MADA Agencia Digital',
        description: 'No somos una agencia cualquiera. Construimos activos digitales con estrategia, código y diseño que convierte.',
        url: `${SITE_URL}${PAGE_PATH}`,
        siteName: 'MADA Agency',
        images: [{ url: IMAGE_URL, width: 1200, height: 630, alt: 'Equipo MADA Agencia Digital' }],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nosotros | MADA',
        description: 'La agencia detrás del código. Conoce a MADA.',
        images: [IMAGE_URL],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Nosotros — MADA Agencia Digital',
    url: `${SITE_URL}${PAGE_PATH}`,
    description: 'MADA es una agencia de desarrollo web y marketing digital en Monterrey, México. Construimos sitios web de alto impacto con Next.js y estrategias digitales que convierten.',
    mainEntity: {
        '@type': 'Organization',
        name: 'MADA',
        url: SITE_URL,
        logo: `${SITE_URL}/social-preview.png`,
        foundingDate: '2023',
        foundingLocation: { '@type': 'Place', name: 'Monterrey, Nuevo León, México' },
        description: 'Agencia de desarrollo web y marketing digital en Monterrey. Especialistas en Next.js, SEO técnico y experiencias de usuario que convierten.',
        sameAs: [
            'https://www.instagram.com/somosmada',
            'https://www.facebook.com/somosmada',
        ],
    },
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <NosotrosClient />
        </>
    );
}
