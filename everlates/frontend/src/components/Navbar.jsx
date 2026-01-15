import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Benefits', 'Schedule', 'Price', 'Location'];

  return (
    <nav className="fixed w-full z-[100] px-4 py-6 flex justify-center pointer-events-none">
      <motion.div
        animate={{ width: scrolled ? '95%' : '100%', maxWidth: '1200px' }}
        className={`flex justify-between items-center px-8 py-4 rounded-full transition-all border pointer-events-auto ${
          scrolled ? 'bg-white/80 border-[#8D6E63]/20 backdrop-blur-xl shadow-lg' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="flex items-center gap-1">
          <span className="font-serif font-bold text-[#5D4037] tracking-tight text-2xl">EVER<span className="text-[#8D6E63]">LATES</span></span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center font-medium text-xs uppercase tracking-widest text-[#5D4037]">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#8D6E63] transition-colors">{item}</a>
          ))}
          <a href={`https://wa.me/${businessConfig.whatsapp}`} className="bg-[#8D6E63] px-6 py-2 rounded-full text-white hover:bg-[#5D4037] transition-all flex items-center gap-2">
            BOOK NOW
          </a>
        </div>

        <button className="md:hidden text-[#5D4037]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-white border border-[#8D6E63]/20 rounded-[2rem] p-8 flex flex-col gap-6 md:hidden z-50 shadow-2xl pointer-events-auto"
          >
            {links.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-2xl font-serif text-[#5D4037] hover:text-[#8D6E63]">{item}</a>
            ))}
            <a href={`https://wa.me/${businessConfig.whatsapp}`} className="bg-[#8D6E63] text-center py-4 rounded-2xl font-bold text-white uppercase tracking-widest">WHATSAPP BOOKING</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;