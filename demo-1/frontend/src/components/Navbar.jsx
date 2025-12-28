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

  const links = ['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'];

  return (
    <nav className="fixed w-full z-50 flex justify-center px-6 py-6 pointer-events-none">
      <motion.div
        initial={false}
        animate={{
          maxWidth: scrolled ? '1000px' : '1280px',
          width: '100%',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className={`
          pointer-events-auto flex justify-between items-center 
          rounded-full px-8 py-4 transition-all duration-500
          backdrop-blur-md border shadow-2xl
          ${scrolled 
            ? 'bg-white/10 border-white/20 shadow-indigo-500/10' 
            : 'bg-white/5 border-white/10 shadow-transparent'}
        `}
        style={{
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg">C</div>
          <span className="font-black text-slate-900 tracking-tighter text-xl uppercase italic">COREBIZ</span>
        </div>
        
        <div className="hidden md:flex gap-10 items-center font-bold text-[10px] uppercase tracking-[0.2em] text-slate-600">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-600 transition-all hover:scale-105 relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-28 left-6 right-6 bg-white/10 backdrop-blur-3xl shadow-2xl rounded-[2.5rem] p-8 flex flex-col gap-6 md:hidden border border-white/20 pointer-events-auto"
          >
            {links.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
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