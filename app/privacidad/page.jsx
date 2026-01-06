import React from 'react';

const PrivacyPolicy = () => {
    return (
        <section className="bg-white min-h-screen py-20 px-6 text-black">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-12 border-b border-gray-100 pb-8">
                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                        Aviso de Privacidad
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Última actualización: Enero 2026
                    </p>
                </div>

                {/* Contenido Legal */}
                <div className="space-y-10 text-sm md:text-base leading-relaxed text-gray-700 font-body">

                    {/* Sección 1 */}
                    <div>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">
                            1. Identidad y Responsable
                        </h2>
                        <p>
                            <strong>MADA</strong> (en adelante "La Agencia"), con operaciones en Nuevo León, México,
                            es responsable del uso y protección de sus datos personales. Al utilizar nuestros servicios
                            digitales, usted acepta las prácticas descritas en este aviso.
                        </p>
                    </div>

                    {/* Sección 2 */}
                    <div>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">
                            2. Datos Recabados
                        </h2>
                        <p className="mb-2">Para las finalidades descritas, recabamos los siguientes datos de forma directa a través de nuestros formularios:</p>
                        <ul className="list-disc pl-5 space-y-1 bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <li>Nombre completo</li>
                            <li>Correo electrónico</li>
                            <li>Número de teléfono (WhatsApp)</li>
                            <li>Detalles del proyecto o empresa</li>
                        </ul>
                    </div>

                    {/* Sección 3 */}
                    <div>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">
                            3. Finalidad del uso de datos
                        </h2>
                        <p>
                            Utilizamos su información exclusivamente para:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Contactarlo para agendar asesorías o reuniones.</li>
                            <li>Enviar cotizaciones y propuestas comerciales.</li>
                            <li>Desarrollo de los proyectos contratados.</li>
                            <li>Facturación y cobro (en caso de contratarse).</li>
                        </ul>
                    </div>

                    {/* Sección 4 - ARCO */}
                    <div>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">
                            4. Derechos ARCO
                        </h2>
                        <p>
                            Usted tiene derecho a <strong>Acceder</strong>, <strong>Rectificar</strong>, <strong>Cancelar</strong> u <strong>Oponerse</strong> (Derechos ARCO) al tratamiento de sus datos personales.
                            Para ejercer estos derechos, envíe una solicitud a: <br />
                            <a href="mailto:hola@somosmada.com" className="text-lime-600 font-bold hover:underline mt-2 inline-block">
                                hola@somosmada.com
                            </a>
                        </p>
                    </div>

                    {/* Sección 5 */}
                    <div>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">
                            5. Cookies y Rastreo
                        </h2>
                        <p>
                            Nuestro sitio web utiliza tecnologías de rastreo (cookies) de Google Analytics y Google Ads para analizar el tráfico y mejorar la experiencia de usuario.
                            Usted puede deshabilitar estas tecnologías desde la configuración de su navegador.
                        </p>
                    </div>

                </div>

                {/* Footer del documento */}
                <div className="mt-20 pt-8 border-t border-gray-200">
                    <a href="/" className="text-xs font-bold uppercase tracking-widest hover:text-lime-600 transition-colors flex items-center gap-2">
                        ← Volver al inicio
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;