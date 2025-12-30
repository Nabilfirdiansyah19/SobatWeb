import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Home', 'About', 'Services', 'Gallery', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 flex justify-center px-4 md:px-6 py-4 md:py-8 pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, scaleX: 0.5, y: -10 }}
        animate={{ 
          opacity: 1, 
          scaleX: 1, 
          y: 0,
          maxWidth: scrolled ? '900px' : '1100px' 
        }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full pointer-events-auto flex justify-between items-center rounded-3xl md:rounded-[2.5rem] px-6 md:px-10 py-4 md:py-5 backdrop-blur-2xl border transition-all duration-1000 ${
          scrolled ? 'bg-black/95 border-white/10 shadow-2xl' : 'bg-white/5 border-white/5'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-black italic shadow-lg shadow-red-600/20">G</div>
          <span className="font-black text-lg md:text-xl italic tracking-tighter text-white uppercase">
            Ghiaz
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center font-black text-[10px] uppercase tracking-[0.3em] text-white/50">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-red-600 transition-colors">{link}</a>
          ))}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="https://wa.link/8zk4ql" 
            className="bg-red-600 text-white px-8 py-3 rounded-2xl flex items-center gap-2 text-[11px] font-black italic tracking-widest"
          >
            <MessageCircle size={14} fill="currentColor" /> DAFTAR
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-4xl p-8 flex flex-col gap-6 md:hidden pointer-events-auto"
          >
            {links.map(link => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-white/70 font-black uppercase italic tracking-widest text-sm text-center"
              >
                {link}
              </a>
            ))}
            <a href="https://wa.link/8zk4ql" className="bg-red-600 text-white py-4 rounded-xl text-center font-black italic text-xs tracking-widest">
              DAFTAR SEKARANG
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;