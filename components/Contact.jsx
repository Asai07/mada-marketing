import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';


const Contact = () => {
    // --- MANEJO DEL CURSOR ---
    const textEnter = () => { };
    const textLeave = () => { };
    const buttonEnter = () => { };
    const handleWhatsApp = () => {
        const phone = "528100000000"; // Tu número
        const message = encodeURIComponent("Hola MADA, tengo un proyecto en mente y quisiera platicar detalles.");
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: "110%" },
        visible: {
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const fadeVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="py-32 md:py-48 px-6 flex flex-col justify-center items-center text-center relative overflow-hidden bg-[#050505] text-white">
            {/* Background noise for texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/noise.svg')]"></div>

            <motion.div
                className="max-w-4xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-20%" }}
            >
                <div className="overflow-hidden mb-6 flex justify-center">
                    <motion.span
                        variants={itemVariants}
                        className="font-body text-xs md:text-sm uppercase tracking-[0.2em] inline-block bg-lime-400/10 text-lime-400 px-4 py-1.5 rounded-full"
                    >
                        // 05. Contacto
                    </motion.span>
                </div>

                <h2 className="font-display text-5xl md:text-8xl font-bold mb-8 leading-tight">
                    <div className="overflow-hidden">
                        <motion.div variants={itemVariants}>
                            ¿Tienes un
                        </motion.div>
                    </div>
                    <div className="overflow-hidden pt-2">
                        <motion.div variants={itemVariants}>
                            <span
                                className="text-transparent hover:text-white transition-colors duration-700 cursor-none"
                                style={{ WebkitTextStroke: '1px white' }}
                                onMouseEnter={textEnter}
                                onMouseLeave={textLeave}
                            >
                                Proyecto?
                            </span>
                        </motion.div>
                    </div>
                </h2>

                <div className="overflow-hidden mb-16 px-4">
                    <motion.p
                        variants={itemVariants}
                        className="font-body text-gray-400 text-lg md:text-3xl max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        Hacemos tus ideas más <span className="italic font-serif bg-lime-400 text-black px-2 py-0.5 rounded-md mx-1">caóticas</span> e interesantes realidad.
                    </motion.p>
                </div>

                <motion.div variants={fadeVariants} className="flex justify-center">
                    <motion.button
                        onClick={handleWhatsApp}
                        onMouseEnter={buttonEnter}
                        onMouseLeave={textLeave}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-12 py-5 font-bold uppercase tracking-widest text-sm overflow-hidden rounded-full shadow-2xl flex items-center justify-center bg-white text-black hover:bg-lime-400 transition-colors duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Contáctanos <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                        {/* Subtle hover overlay */}
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;