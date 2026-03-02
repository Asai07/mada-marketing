/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Tus configuraciones existentes de fuentes
            fontFamily: {
                sans: ['var(--font-space)', 'sans-serif'],
                display: ['var(--font-space)', 'sans-serif'],
                body: ['var(--font-syne)', 'sans-serif'],
            },
            // Tus configuraciones existentes de fondos
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            // --- NUEVAS ANIMACIONES AÑADIDAS ---
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'float-slow': 'float 6s ease-in-out infinite',
                'float-medium': 'float 4s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            colors: {
                'meritage-gold': '#C5A059', // Un dorado elegante mate
                'meritage-dark': '#1C1C1C', // Negro suave
                'meritage-cream': '#F9F8F4', // Fondo hueso
            }
        },
    },
    plugins: [],
};