import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = React.forwardRef(({ onOpenBooking }, props, ref) => (
    <footer ref={ref} className="py-20 md:py-32 px-6 relative overflow-hidden bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
            <h2 onClick={onOpenBooking} className="text-[11vw] md:text-[12vw] font-display font-bold leading-none mb-10 md:mb-10 transition-all duration-500 cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:1px_white]">HABLEMOS</h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-left border-t border-white/20 pt-12">
                <div><h4 className="font-display text-lg md:text-xl mb-4 md:mb-6">SOMOSMADA HQ</h4><p className="font-body text-sm text-gray-400">Monterrey<br />Nuevo León<br />MX</p></div>
                <div><h4 className="font-display text-lg md:text-xl mb-4 md:mb-6">Contacto</h4><a href="mailto:hola@mada.agency" className="block font-body text-sm text-gray-400 hover:text-lime-400 transition-colors mb-2">hola@somosmada.com</a><a href="tel:+525512345678" className="block font-body text-sm text-gray-400 hover:text-lime-400 transition-colors">+52 (81) 80114561</a></div>
                <div>
                    <h4 className="font-display text-lg md:text-xl mb-4 md:mb-6">Social</h4>
                    <div className="flex gap-6"><Instagram className="w-5 h-5 md:w-6 md:h-6 hover:text-lime-400 transition-colors cursor-pointer" /><Twitter className="w-5 h-5 md:w-6 md:h-6 hover:text-lime-400 transition-colors cursor-pointer" /><Linkedin className="w-5 h-5 md:w-6 md:h-6 hover:text-lime-400 transition-colors cursor-pointer" /></div>
                </div>
            </div>
            <div className="mt-20 md:mt-32 flex flex-col md:flex-row justify-between items-center md:items-end gap-4 text-[10px] md:text-xs font-body text-gray-600 uppercase tracking-widest"><span>© 2025 Mada Agency</span><span>All rights reserved</span><span>Privacy Policy</span></div>
        </div>
    </footer>
));

export default Footer;