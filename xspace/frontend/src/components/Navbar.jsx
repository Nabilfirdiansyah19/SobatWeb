import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Facilities', 'Gallery', 'Locations'];

  return (
    <nav className="fixed w-full z-[100] px-4 py-6 flex justify-center pointer-events-none">
      <motion.div
        animate={{ width: scrolled ? '90%' : '100%', maxWidth: '1200px' }}
        className={`flex justify-between items-center px-8 py-4 rounded-full transition-all border shadow-2xl pointer-events-auto ${
          scrolled ? 'bg-black/80 border-orange-600/30 backdrop-blur-xl' : 'bg-transparent border-transparent'
        }`}
      >
        {/* LOGO TEXT ONLY */}
        <div className="flex items-center gap-1">
          <span className="font-black text-white italic tracking-tighter text-3xl uppercase">XSPACE<span className="text-orange-600">IDN</span></span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center font-black text-[10px] uppercase tracking-widest text-white/70">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-500 transition-colors">{item}</a>
          ))}
          <a href="https://wa.me/628123456789" className="bg-orange-600 px-6 py-2 rounded-full text-white hover:scale-105 transition-transform flex items-center gap-2">
            <Zap size={14} fill="currentColor"/> BOOK NOW
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-zinc-950 border border-orange-600/50 rounded-[2rem] p-8 flex flex-col gap-6 md:hidden z-50 shadow-2xl pointer-events-auto"
          >
            {links.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-3xl font-black text-white uppercase italic hover:text-orange-600">{item}</a>
            ))}
            <a href="https://wa.me/628123456789" className="bg-orange-600 text-center py-5 rounded-2xl font-black text-white uppercase tracking-widest">START EXPERIENCE</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;