// Ubicación: app/hoteles/page.jsx

import React from 'react';
// 1. Importas tus componentes globales (ajusta la ruta si es necesario)

// 2. Importas el componente LOCAL que acabamos de crear
import HeroHotel from './components/HeroHotel';

export const metadata = {
    title: 'Soluciones para Hoteles | MADA',
    description: 'Aumenta tus reservas directas con nuestras soluciones web.',
};

export default function Page() {
    return (
        <main className="min-h-screen bg-slate-900">
            {/* Tu barra de navegación global */}


            {/* Aquí se renderiza el Hero que diseñamos */}
            <HeroHotel />

            {/* Aquí irían las otras secciones (Features, Pricing, etc.) */}

            {/* Tu pie de página global */}

        </main>
    );
}