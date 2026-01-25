import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Classes', 'Gallery', 'Contact'];

  return (
    <nav className="fixed w-full z-50 flex justify-center px-4 py-6 pointer-events-none">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0, maxWidth: scrolled ? '800px' : '1200px', width: '100%' }}
        className={`pointer-events-auto flex justify-between items-center rounded-full px-8 py-4 transition-all duration-500 backdrop-blur-md border border-amber-100/50 shadow-xl ${scrolled ? 'bg-white/80' : 'bg-white/40'}`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-serif italic shadow-lg">F</div>
          <span className="font-serif font-bold text-amber-900 tracking-tighter text-xl italic">FairyStudio</span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center font-bold text-[10px] uppercase tracking-[0.2em] text-amber-800">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-500 transition-all">
              {item}
            </a>
          ))}
        </div>

        <button className="md:hidden text-amber-900 pointer-events-auto" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl shadow-2xl rounded-[2.5rem] p-8 flex flex-col gap-6 md:hidden border border-amber-100 pointer-events-auto"
          >
            {links.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-xl font-serif font-bold text-amber-900">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;