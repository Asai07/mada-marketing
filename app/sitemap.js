export default function sitemap() {
    const baseUrl = 'https://somosmada.com';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },

    ];
}