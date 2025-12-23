'use client'; // No olvides esto porque usas useState
import React, { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import Image from 'next/image'; // <--- 1. IMPORTANTE

const Services = React.forwardRef(({ isMobile }, ref) => {
    const [activeService, setActiveService] = useState(0);
    const services = [
        { id: "01", title: "Strategy", text: "Brand Audit, Market Research, Digital Roadmap. Definimos el camino antes de dar el primer paso.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" },
        { id: "02", title: "Design", text: "UI/UX, Art Direction, Motion Graphics, 3D. Belleza funcional que retiene miradas.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" },
        { id: "03", title: "Development", text: "React, WebGL, Creative Coding, Headless CMS. Código limpio para experiencias salvajes.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop" },
        { id: "04", title: "Content", text: "Copywriting, Video Production, Social Assets. Historias que convierten espectadores en fans.", img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2670&auto=format&fit=crop" }
    ];

    return (
        <section ref={ref} className="py-16 md:py-32 px-0 relative min-h-screen flex flex-col justify-center bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto w-full px-6 mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-end">
                <div>
                    <span className="text-lime-400 font-body text-xs uppercase tracking-[0.2em] block mb-4">02. Capabilities</span>
                    <h2 className="text-4xl md:text-8xl font-display font-bold text-white uppercase leading-[0.8]">Nuestras<br /><span className="text-transparent stroke-text-white">Armas</span></h2>
                </div>
                <div className="mt-6 md:mt-0 text-left md:text-right">
                    <p className="text-gray-400 font-body text-xs md:text-sm max-w-xs">{isMobile ? 'Toca para explorar.' : 'Despliega cada módulo para explorar.'}</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full h-[80vh] lg:h-[70vh] border-y border-white/10" onMouseLeave={() => !isMobile && setActiveService(0)}>
                {services.map((service, index) => (
                    <div key={index} onMouseEnter={() => !isMobile && setActiveService(index)} onClick={() => setActiveService(index)}
                        className={`relative border-b border-white/10 lg:border-b-0 lg:border-r overflow-hidden transition-all duration-700 ease-[0.22, 1, 0.36, 1] group cursor-pointer lg:cursor-none ${activeService === index ? 'flex-[4] lg:flex-[3] opacity-100' : 'flex-[1] lg:flex-[1] opacity-60 hover:opacity-100'}`}>

                        {/* --- AQUÍ ESTÁ EL CAMBIO --- */}
                        <Image
                            src={service.img}
                            alt={service.title}
                            fill // Esto reemplaza al width/height y position absolute
                            className={`object-cover object-center transition-all duration-1000 ${activeService === index ? 'scale-105 grayscale-0 opacity-50' : 'scale-125 grayscale opacity-0'}`}
                            sizes="(max-width: 1024px) 100vw, 50vw" // Optimización: carga imágenes más chicas en móvil
                        />
                        {/* --------------------------- */}

                        <div className={`absolute inset-0 bg-[#0a0a0a] transition-opacity duration-700 ${activeService === index ? 'opacity-30' : 'opacity-100'}`} />

                        <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <span className={`font-display text-xl md:text-2xl transition-colors duration-300 drop-shadow-lg ${activeService === index ? 'text-lime-400' : 'text-gray-600'}`}>/{service.id}</span>
                                <div className={`transition-transform duration-500 ${activeService === index ? 'rotate-90' : 'rotate-0'}`}>{activeService === index ? <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-lime-400" /> : <Plus className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />}</div>
                            </div>
                            <div className="relative">
                                <h3 className={`font-display font-bold uppercase leading-none transition-all duration-500 origin-bottom-left drop-shadow-md ${activeService === index ? 'text-3xl sm:text-4xl md:text-7xl text-white translate-y-0 opacity-100' : 'text-2xl md:text-4xl text-transparent stroke-text-white lg:-rotate-90 lg:absolute lg:bottom-0 lg:left-0 lg:origin-bottom-left lg:w-[500px] lg:mb-2 opacity-50'}`}>{service.title}</h3>
                                <div className={`overflow-hidden transition-all duration-700 ease-out ${activeService === index ? 'max-h-[300px] opacity-100 mt-4 md:mt-6' : 'max-h-0 opacity-0'}`}>
                                    <p className="font-body text-sm md:text-xl text-white font-medium max-w-lg leading-relaxed border-l-2 border-lime-400 pl-4 md:pl-6 backdrop-blur-sm bg-black/10 p-2 rounded-r-lg">{service.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
});

export default Services;