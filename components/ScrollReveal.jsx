'use client';
import { motion } from 'framer-motion';

export default function ScrollReveal({
    children,
    width = "fit-content", // O "100%" dependiendo del caso
    delay = 0,             // Retraso opcional
    y = 30,                // Desplazamiento vertical inicial
    duration = 0.5         // Duración de la animación
}) {
    return (
        <div style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: y },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }} // Se activa cuando el elemento entra un poco en pantalla
                transition={{ duration: duration, delay: delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}