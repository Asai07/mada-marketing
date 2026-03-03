import ContactoClient from './ContactoClient';

const SITE_URL = 'https://somosmada.com';
const PAGE_PATH = '/contacto';
const IMAGE_URL = `${SITE_URL}/social-preview.png`;

export const metadata = {
    title: 'Contacto | Habla con MADA — Agencia Web Monterrey',
    description: 'Escríbenos, llámanos o agenda una llamada. Estamos en Monterrey, NL. Respondemos en menos de 24 horas. Empieza tu proyecto hoy.',
    alternates: {
        canonical: `${SITE_URL}${PAGE_PATH}`,
    },
    openGraph: {
        title: 'Contáctanos | MADA Agencia Digital',
        description: '¿Tienes un proyecto en mente? Cuéntanos. Respondemos en menos de 24h.',
        url: `${SITE_URL}${PAGE_PATH}`,
        siteName: 'MADA Agency',
        images: [{ url: IMAGE_URL, width: 1200, height: 630, alt: 'Contacto MADA Agencia Digital' }],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contacto | MADA',
        description: 'Hablemos de tu proyecto digital.',
        images: [IMAGE_URL],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contacto — MADA Agencia Digital',
    url: `${SITE_URL}${PAGE_PATH}`,
    mainEntity: {
        '@type': 'ProfessionalService',
        name: 'MADA',
        url: SITE_URL,
        telephone: '+528180114561',
        email: 'contacto@somosmada.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Monterrey',
            addressRegion: 'NL',
            addressCountry: 'MX',
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
            },
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
            <ContactoClient />
        </>
    );
}
