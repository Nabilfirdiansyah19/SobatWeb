import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { businessConfig } from '../config/businessConfig';

const Chatbot = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Selamat datang di VIEN. Masuki dunia desain tanpa batas. Ada yang bisa saya bantu?' }
  ]);
  const scrollRef = useRef(null);

  const options = [
    { q: 'Estimasi Biaya', a: 'Investasi desain mulai Rp 150rb/m2. Kami mengutamakan detail material terbaik.' },
    { q: 'Alur Kerja', a: 'Dimulai dari Konsultasi Pribadi, Konsep Visual, hingga Instalasi Akhir.' },
    { q: 'Lokasi Proyek', a: 'Kami melayani Jabodetabek secara fisik dan seluruh Indonesia via Online.' },
  ];

  // LOGIKA KEMUNCULAN & AUTO-HIDE TOOLTIP
  useEffect(() => {
    if (isLoading) {
      setShouldRender(false);
      return;
    }

    const handleAppearance = () => {
      if (window.scrollY > 300) setShouldRender(true);
    };

    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 1500);

    window.addEventListener('scroll', handleAppearance);
    return () => {
      window.removeEventListener('scroll', handleAppearance);
      clearTimeout(timer);
    };
  }, [isLoading]);

  // Efek khusus untuk menghilangkan tooltip setelah 6 detik muncul
  useEffect(() => {
    if (shouldRender) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 6000); // 6 detik lalu hilang
      return () => clearTimeout(tooltipTimer);
    }
  }, [shouldRender]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, { role: 'user', text: option.q }]);
    setIsTyping(true);
    setShowTooltip(false); // Hilangkan tooltip jika user klik opsi
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: option.a }]);
      setIsTyping(false);
    }, 1200);
  };

  const LuxuryRobotIcon = ({ size = 30, active = false }) => (
    <motion.div 
      className="relative flex items-center justify-center"
      animate={active ? { scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
        <rect x="25" y="35" width="50" height="40" rx="12" stroke="#D4AF37" strokeWidth="2.5"/>
        <path d="M40 50H45M55 50H60" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round"/>
        <motion.path d="M35 15L45 35M65 15L55 35" stroke="#D4AF37" strokeWidth="2" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
        <circle cx="35" cy="15" r="3" fill="#D4AF37" />
        <circle cx="65" cy="15" r="3" fill="#D4AF37" />
      </svg>
    </motion.div>
  );

  if (isLoading || !shouldRender) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-[99999] flex flex-col items-end">
      
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }} 
            animate={{ opacity: 1, x: 0, scale: 1 }} 
            exit={{ opacity: 0, x: 20, scale: 0.8, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="mb-3 bg-[#1A1A1A] text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 border border-[#D4AF37]/30"
          >
            <Sparkles size={12} className="text-[#D4AF37] animate-pulse" />
            <p className="text-[9px] font-bold uppercase tracking-[0.2em]">Inquiry Assistant</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.8, rotate: -5 }}
            className="mb-4 w-[85vw] max-w-[350px] h-[450px] md:h-[580px] bg-white/95 backdrop-blur-2xl shadow-2xl rounded-[2.5rem] md:rounded-[3rem] border border-[#D4AF37]/20 overflow-hidden flex flex-col"
          >
            <div className="bg-[#1A1A1A] p-4 md:p-6 text-white flex justify-between items-center relative overflow-hidden">
              <div className="flex items-center gap-3 md:gap-4 z-10">
                <LuxuryRobotIcon size={32} active={true} />
                <div>
                  <h3 className="font-serif text-lg md:text-xl tracking-wide">Vien AI</h3>
                  <span className="text-[8px] text-[#D4AF37] font-black uppercase tracking-[0.2em]">Virtual Concierge</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-white/30 hover:text-white transition-colors z-10">
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 bg-[#FDFBF7]">
              {messages.map((msg, i) => (
                <motion.div initial={{ opacity: 0, x: msg.role === 'bot' ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} key={i} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-3 md:p-4 text-[12px] md:text-[13px] leading-relaxed rounded-[1.5rem] md:rounded-[2rem] ${msg.role === 'bot' ? 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none' : 'bg-[#1A1A1A] text-[#D4AF37] rounded-br-none shadow-xl font-medium'}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && <div className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest animate-pulse ml-2">Vien is typing...</div>}
            </div>

            <div className="p-4 md:p-6 bg-white border-t border-slate-50 space-y-3 md:space-y-4">
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {options.map((opt, i) => (
                  <motion.button 
                    whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}
                    key={i} onClick={() => handleOptionClick(opt)} 
                    className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest px-3 py-2 bg-[#FDFBF7] text-slate-500 rounded-full border border-slate-200 hover:bg-[#D4AF37]/10 hover:text-[#1A1A1A] transition-all"
                  >
                    {opt.q}
                  </motion.button>
                ))}
              </div>
              <button 
                onClick={() => window.open(businessConfig.whatsapp)} 
                className="w-full bg-[#D4AF37] text-[#1A1A1A] py-3 md:py-4 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] flex items-center justify-center gap-2 md:gap-3"
              >
                <Phone size={12} md:size={14} /> WhatsApp Expert
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 15, stiffness: 200 }}
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false); // Langsung hilang jika tombol diklik
        }}
        className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-2xl relative overflow-hidden transition-all duration-500 bg-[#1A1A1A] border-2 border-[#D4AF37]/50 ${isOpen ? 'rounded-full' : 'rounded-[1.5rem] md:rounded-[2rem]'}`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }}>
              <X size={28} className="text-[#D4AF37]" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <LuxuryRobotIcon size={32} md:size={40} />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div animate={{ x: [-100, 200] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
      </motion.button>
    </div>
  );
};

export default Chatbot;