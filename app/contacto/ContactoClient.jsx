'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const contactMethods = [
    {
        icon: <Mail className="w-5 h-5" />,
        label: 'Email',
        value: 'hola@somosmada.com',
        href: 'mailto:hola@somosmada.com',
    },
    {
        icon: <Phone className="w-5 h-5" />,
        label: 'WhatsApp / Teléfono',
        value: '+52 (81) 8011 4561',
        href: 'https://wa.me/528180114561?text=' + encodeURIComponent('Hola, me gustaría información sobre sus servicios.'),
    },
    {
        icon: <MapPin className="w-5 h-5" />,
        label: 'Ubicación',
        value: 'Monterrey, Nuevo León, México',
        href: null,
    },
    {
        icon: <Clock className="w-5 h-5" />,
        label: 'Horario de atención',
        value: 'Lun–Vie, 9:00 – 18:00 CST',
        href: null,
    },
];

export default function ContactoClient() {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Redirigir a WhatsApp con el mensaje del formulario
        const text = encodeURIComponent(
            `Hola MADA! 👋\n\nMe llamo *${formData.name}*${formData.company ? ` y represento a *${formData.company}*` : ''}.\n\nMe interesa: ${formData.service || 'Conocer sus servicios'}.\n\n${formData.message}\n\nCorreo de contacto: ${formData.email}`
        );
        window.open(`https://wa.me/528180114561?text=${text}`, '_blank');

        setSubmitted(true);
        setLoading(false);
    };

    return (
        <div className="bg-white min-h-screen">

            {/* HERO */}
            <section className="pt-40 pb-20 px-6 bg-[#050505] text-white">
                <div className="max-w-6xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-lime-400 font-mono text-xs uppercase tracking-widest mb-6 block"
                    >
                        // Contáctanos
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-6xl md:text-[10vw] font-display font-bold leading-none mb-8 uppercase"
                    >
                        Hablemos<br />
                        <span className="text-lime-400">de tu</span><br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>proyecto.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-xl text-lg"
                    >
                        Respondemos en menos de 24 horas en días hábiles. Sin formularios eternos, sin ventas agresivas.
                    </motion.p>
                </div>
            </section>

            {/* MAIN: FORMULARIO + DATOS */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">

                    {/* FORMULARIO */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-display font-bold text-black mb-8">Cuéntanos tu proyecto</h2>

                        {submitted ? (
                            <div className="p-10 bg-lime-50 border border-lime-200 rounded-2xl text-center">
                                <div className="text-5xl mb-4">🚀</div>
                                <h3 className="text-2xl font-display font-bold text-black mb-3">¡Mensaje enviado!</h3>
                                <p className="text-gray-600">Te hemos redirigido a WhatsApp. Si prefieres también puedes escribirnos directamente a{' '}
                                    <a href="mailto:hola@somosmada.com" className="text-lime-600 font-bold hover:underline">hola@somosmada.com</a>
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Nombre *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Tu nombre"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-lime-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="tu@empresa.com"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-lime-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Empresa (opcional)</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Nombre de tu empresa o proyecto"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-lime-500 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">¿Qué necesitas?</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-black focus:outline-none focus:border-lime-500 transition-colors bg-white"
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        <option value="Sitio web / Landing Page">Sitio web / Landing Page</option>
                                        <option value="Tienda en línea">Tienda en línea (E-commerce)</option>
                                        <option value="Marketing Digital">Marketing Digital</option>
                                        <option value="SEO y Posicionamiento">SEO y Posicionamiento</option>
                                        <option value="Aplicación web a medida">Aplicación web a medida</option>
                                        <option value="Otro">Otro / No sé bien aún</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Cuéntanos más *</label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="¿En qué etapa está tu proyecto? ¿Tienes plazo de entrega? ¿Presupuesto aproximado? Cualquier detalle nos ayuda."
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-lime-500 transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-black text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-lime-500 hover:text-black transition-all duration-300 disabled:opacity-60"
                                >
                                    <Send className="w-4 h-4" />
                                    {loading ? 'Enviando...' : 'Enviar por WhatsApp'}
                                </button>
                                <p className="text-xs text-gray-400 text-center">
                                    Al enviar te redirigimos a WhatsApp para una respuesta más rápida.
                                </p>
                            </form>
                        )}
                    </motion.div>

                    {/* DATOS DE CONTACTO */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-display font-bold text-black mb-8">Datos de contacto</h2>

                        <div className="space-y-6 mb-12">
                            {contactMethods.map((method, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="p-3 bg-lime-50 rounded-xl text-lime-600 shrink-0">{method.icon}</div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">{method.label}</p>
                                        {method.href ? (
                                            <a href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-black font-medium hover:text-lime-600 transition-colors">
                                                {method.value}
                                            </a>
                                        ) : (
                                            <p className="text-black font-medium">{method.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-100 pt-10">
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-5">Síguenos</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.instagram.com/mada.webstudio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-xl text-sm font-medium text-black hover:border-lime-400 hover:text-lime-600 transition-all"
                                >
                                    <Instagram className="w-4 h-4" />
                                    Instagram
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <a
                                    href="https://www.facebook.com/mada.webstudio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-xl text-sm font-medium text-black hover:border-lime-400 hover:text-lime-600 transition-all"
                                >
                                    <Facebook className="w-4 h-4" />
                                    Facebook
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        </div>

                        {/* EXPECTATIVA DE RESPUESTA */}
                        <div className="mt-10 p-6 bg-[#050505] rounded-2xl">
                            <p className="text-lime-400 font-mono text-xs uppercase tracking-wider mb-3">// Qué esperar</p>
                            <div className="space-y-3 text-sm text-gray-400">
                                <p>🟢 <strong className="text-white">Día 1</strong> — Respondemos con preguntas clave sobre tu proyecto</p>
                                <p>🟢 <strong className="text-white">Día 2-3</strong> — Mandamos propuesta y cotización detallada</p>
                                <p>🟢 <strong className="text-white">Día 4+</strong> — Inicio del proyecto una vez confirmado</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* LINKS INTERNOS */}
            <section className="py-16 pb-28 px-6 bg-gray-50 border-t border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <p className="text-center text-sm text-gray-500 mb-8">¿No sabes por dónde empezar?</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/precios" className="px-6 py-3 border border-gray-200 bg-white rounded-xl text-sm font-medium text-black hover:border-lime-400 transition-colors flex items-center gap-2">
                            Ver planes y precios <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <Link href="/servicios" className="px-6 py-3 border border-gray-200 bg-white rounded-xl text-sm font-medium text-black hover:border-lime-400 transition-colors flex items-center gap-2">
                            Ver todos los servicios <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <Link href="/nosotros" className="px-6 py-3 border border-gray-200 bg-white rounded-xl text-sm font-medium text-black hover:border-lime-400 transition-colors flex items-center gap-2">
                            Quiénes somos <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
