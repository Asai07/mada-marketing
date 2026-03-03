import AppsClient from './AppsClient';

const SITE_URL = 'https://somosmada.com';
const PAGE_PATH = '/servicios/apps';
const IMAGE_URL = `${SITE_URL}/social-preview.png`;

export const metadata = {
    title: 'Desarrollo de Aplicaciones Híbridas con React | iOS, Android y Web',
    description: 'Desarrollamos aplicaciones móviles y de escritorio híbridas con React. Un solo código para iOS, Android y web. Más rápido, más económico y con la misma calidad que una app nativa.',
    alternates: {
        canonical: PAGE_PATH,
    },
    openGraph: {
        title: 'MADA | Apps Híbridas con React — iOS, Android y Web',
        description: 'Lanza tu app en iOS, Android y web con un solo equipo de desarrollo. Tecnología React para máxima velocidad de entrega y mínimo costo.',
        url: `${SITE_URL}${PAGE_PATH}`,
        siteName: 'MADA Agency',
        images: [{ url: IMAGE_URL, width: 1200, height: 630, alt: 'Desarrollo de Apps Híbridas MADA' }],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Apps Híbridas React | MADA',
        description: 'Una app para iOS, Android y web. Desarrollada con React.',
        images: [IMAGE_URL],
    },
    keywords: ['Desarrollo de Apps Monterrey', 'Aplicaciones Híbridas React', 'React Native México', 'App iOS Android', 'Desarrollo Móvil'],
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Desarrollo de Aplicaciones Móviles Híbridas',
    provider: {
        '@type': 'ProfessionalService',
        name: 'MADA',
        url: SITE_URL,
        logo: `${SITE_URL}/social-preview.png`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Monterrey',
            addressRegion: 'NL',
            addressCountry: 'MX'
        },
        sameAs: [
            'https://www.instagram.com/mada.webstudio',
            'https://www.facebook.com/mada.webstudio'
        ]
    },
    areaServed: { '@type': 'Country', name: 'México' },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Desarrollo de Aplicaciones',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Apps Híbridas iOS & Android',
                    description: 'Aplicaciones móviles que funcionan en iOS y Android desarrolladas con React Native o Capacitor desde una sola base de código.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Aplicaciones Web Progresivas (PWA)',
                    description: 'Sitios web que funcionan como aplicaciones nativas con soporte offline, notificaciones push e instalación desde el navegador.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Aplicaciones de Escritorio con Tauri',
                    description: 'Apps de escritorio multiplataforma (Windows, macOS, Linux) construidas con tecnología web moderna.'
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
            <AppsClient />
        </>
    );
}
