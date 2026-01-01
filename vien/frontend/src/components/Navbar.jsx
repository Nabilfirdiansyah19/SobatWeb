import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' }, // Sudah diganti dari Services
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-100 transition-all duration-700 ${
      scrolled 
        ? 'bg-white/70 backdrop-blur-xl py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]' 
        : 'bg-transparent py-10'
    }`}>
      <div className="container mx-auto px-6 md:px-20 flex justify-between items-center">
        
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <h1 className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-[#1A1A1A]">
            VIEN<span className="text-[#D4AF37]">.</span>INTERIOR
          </h1>
          <span className="text-[7px] uppercase tracking-[0.6em] text-[#D4AF37] font-black -mt-1">Design Studio</span>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center">
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] font-bold text-[#1A1A1A]">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative group overflow-hidden"
              >
                <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">
                  {link.name}
                </span>
                <span className="absolute left-0 top-full inline-block text-[#D4AF37] transition-transform duration-500 group-hover:-translate-y-full">
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-slate-200 mx-2" />

          <a 
            href={businessConfig.whatsapp} 
            target="_blank"
            rel="noreferrer"
            className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-all shadow-lg shadow-black/5"
          >
            Inquiry
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center text-[#1A1A1A]" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif text-[#1A1A1A]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
                <a href={businessConfig.whatsapp} className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs">
                  Whatsapp Consultation
                </a>
                <a href={businessConfig.instagram} className="flex items-center gap-2 text-slate-400 text-xs">
                  <Instagram size={14} /> @vien.interior
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;