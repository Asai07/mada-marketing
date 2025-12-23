import React from 'react';
import { Check, Sparkles, Zap, InfinityIcon } from 'lucide-react';

const PricingSection = () => {
    return (
        <section className="py-20 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
                    <div>
                        <span className="text-lime-600 font-mono text-xs uppercase tracking-widest mb-4 block">// Investment Models</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-black">Arquitectura de<br />Valor Digital.</h2>
                    </div>
                    <p className="max-w-md text-gray-500 text-sm md:text-base text-right">
                        No vendemos "gastos", vendemos activos. Elige la potencia de tu motor de crecimiento.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* PLAN 1: IGNITION (Light Card) */}
                    <div className="group relative p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-lime-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <div className="mb-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-white rounded-lg text-black shadow-sm group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Basic Tier</span>
                            </div>
                            <h3 className="text-3xl font-display font-bold mb-2">IGNITION</h3>
                            <p className="text-gray-500 text-sm h-10">Para validar ideas sin quemar presupuesto. El inicio de todo.</p>
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-bold font-display text-black">$2,600</span>
                            <span className="text-gray-500 text-sm ml-2">/ pago único</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Landing Page (One-pager)",
                                "Dominio Gratis (1 Año)",
                                "Diseño Portfolio (Best Practices)",
                                "Hosting Optimizado",
                                "Entrega Express (5 Días)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button aria-label="Seleccionar plan ignition" className="w-full py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest">
                            Seleccionar plan
                        </button>
                    </div>

                    {/* PLAN 2: MOMENTUM (Black Card - High Contrast) */}
                    <div className="relative p-8 rounded-2xl bg-black text-white shadow-2xl hover:shadow-lime-900/20 hover:-translate-y-2 transition-all duration-500 flex flex-col transform md:-translate-y-4 ring-1 ring-black/5">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-lime-400 text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                            Best Seller
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-lime-400 rounded-lg text-black shadow-[0_0_15px_rgba(163,230,53,0.5)]">
                                    <Zap className="w-6 h-6 fill-current" />
                                </div>
                                <span className="text-xs font-mono text-lime-400 uppercase tracking-wider">Growth Tier</span>
                            </div>
                            <h3 className="text-3xl font-display font-bold mb-2 text-white">MOMENTUM</h3>
                            <p className="text-gray-400 text-sm h-10">Escalabilidad real. La estructura que las marcas necesitan para vender.</p>
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-bold font-display text-lime-400">$3,900</span>
                            <span className="text-gray-400 text-sm ml-2">/ pago único</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Landing o Multi-sección (Hasta 5)",
                                "Diseño Personalizado (UI Kit)",
                                "CMS Semi-administrable",
                                "Integración WhatsApp/CRM",
                                "SEO Técnico Básico",
                                "Optimización de Velocidad"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white font-medium">
                                    <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button aria-label="Seleccionar plan bestseller" className="w-full py-3 bg-lime-400 text-black font-bold border border-lime-400 hover:bg-transparent hover:text-lime-400 transition-all duration-300 text-xs uppercase tracking-widest">
                            Seleccionar Plan
                        </button>
                    </div>

                    {/* PLAN 3: SINGULARITY (Light Card) */}
                    <div className="group relative p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-purple-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <div className="mb-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-white rounded-lg text-purple-600 shadow-sm group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                                    <InfinityIcon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Scale Tier</span>
                            </div>
                            <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-purple-600 transition-colors">SINGULARITY</h3>
                            <p className="text-gray-500 text-sm h-10">Sin límites. Cuando tu marca ya no cabe en moldes prefabricados.</p>
                        </div>

                        <div className="mb-8">
                            <span className="text-2xl font-bold font-display text-black">Custom</span>
                            <span className="block text-xs text-gray-500 mt-1">A partir de $6,000</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Diseño 100% 'Hand-coded' / WebGL",
                                "Estrategia de Marca & Copywriting",
                                "Analíticas Avanzadas",
                                "Posicionamiento SEO Agresivo",
                                "Soporte & Mantenimiento Prioritario"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button aria-label="Contactar ventas" className="w-full py-3 border border-black text-black hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 text-xs font-bold uppercase tracking-widest">
                            Contactar Ventas
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default PricingSection;