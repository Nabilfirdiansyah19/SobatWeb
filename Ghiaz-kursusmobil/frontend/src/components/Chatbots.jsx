import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, Phone, MessageSquare } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(true); // Hint untuk mobile & desktop
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Halo! Saya Ghiaz-Bot. Siap membantu kamu jadi pengemudi mahir. Ada yang ingin ditanyakan?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const options = [
    { q: 'Lokasi latihannya di mana?', a: 'Kami melayani antar-jemput khusus area Tangerang & sekitarnya, langsung ke rumah Anda!' },
    { q: 'Info harga & promo terbaru?', a: 'Ada diskon s.d 300rb! Admin kami akan mengirimkan daftar harga lengkap via WhatsApp.' },
    { q: 'Apakah cocok untuk pemula?', a: 'Tentu! Instruktur kami sangat sabar dan humble untuk pemula.' }
  ];

  // Sembunyikan hint setelah beberapa detik agar tidak menutupi konten terus menerus
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (option) => {
    if (isTyping) return;
    setMessages(prev => [...prev, { role: 'user', text: option.q }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: option.a }]);
      setIsTyping(false);
    }, 800);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[9999] flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="w-[92vw] sm:w-[380px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden mb-6 flex flex-col max-h-[75vh] md:max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-red-600 p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-white font-black italic uppercase tracking-tighter text-sm leading-none">Ghiaz-Bot</h3>
                  <p className="text-[10px] text-red-100 font-bold mt-1 uppercase tracking-widest">Asisten Virtual</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] font-medium ${
                    msg.role === 'bot' ? 'bg-white text-slate-700 shadow-sm border border-slate-100' : 'bg-red-600 text-white shadow-lg shadow-red-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-xl border border-slate-100 flex gap-1">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="p-5 bg-white border-t border-slate-100 space-y-4">
              <div className="flex flex-wrap gap-2">
                {options.map((opt, i) => (
                  <button key={i} onClick={() => handleOptionClick(opt)} className="text-[10px] font-bold uppercase italic px-4 py-2 bg-slate-100 hover:bg-red-600 hover:text-white text-slate-600 rounded-full border border-slate-200 transition-all">
                    {opt.q}
                  </button>
                ))}
              </div>
              <a href="https://wa.link/8zk4ql" target="_blank" rel="noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black uppercase italic tracking-widest text-[11px] flex items-center justify-center gap-3">
                <Phone size={14} fill="currentColor" /> Chat Admin WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Robot Full Body */}
      <div className="relative flex flex-col items-center">
        
        {/* HINT BUBBLE (Sekarang Muncul di Mobile juga) */}
        <AnimatePresence>
          {!isOpen && showHint && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute bottom-36 md:bottom-40 right-0 bg-black text-white text-[10px] font-black uppercase italic px-4 py-2 rounded-2xl whitespace-nowrap shadow-xl border-2 border-red-600"
            >
              Tanya Ghiaz-Bot! 
              {/* Arrow down */}
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-black border-r-2 border-b-2 border-red-600 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-end justify-center w-24 h-32 md:w-28 md:h-36 outline-none"
        >
          {isOpen ? (
            <div className="mb-8 w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
              <X size={30} />
            </div>
          ) : (
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative flex flex-col items-center"
            >
              {/* Kepala */}
              <div className="w-12 h-10 bg-red-600 rounded-2xl shadow-lg flex items-center justify-center relative z-20 border-b-4 border-red-800">
                <div className="flex gap-2">
                  <motion.div animate={{ scaleY: [1, 1, 0.1, 1, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_white]" />
                  <motion.div animate={{ scaleY: [1, 1, 0.1, 1, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_white]" />
                </div>
              </div>

              {/* Leher */}
              <div className="w-4 h-2 bg-slate-300 -mt-1 shadow-inner" />

              {/* Badan */}
              <div className="w-16 h-16 bg-red-600 rounded-[1.5rem] shadow-xl relative z-10 border-b-4 border-red-800 flex items-center justify-center">
                <MessageSquare size={20} className="text-white/20 absolute opacity-50" />
                
                {/* Tangan Kiri */}
                <motion.div 
                  animate={{ rotate: [0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute -left-3 top-2 w-4 h-10 bg-red-500 rounded-full origin-top border-b-2 border-red-700" 
                />
                {/* Tangan Kanan (Melambai) */}
                <motion.div 
                  animate={{ rotate: [0, 40, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="absolute -right-3 top-2 w-4 h-10 bg-red-500 rounded-full origin-top border-b-2 border-red-700" 
                />
              </div>

              {/* Jet Propulsor */}
              <div className="flex gap-4 -mt-2">
                <div className="w-4 h-4 bg-slate-400 rounded-b-lg">
                  <motion.div animate={{ scaleY: [1, 2, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 0.2 }} className="w-full h-4 bg-red-400 blur-[2px] mt-1" />
                </div>
                <div className="w-4 h-4 bg-slate-400 rounded-b-lg">
                  <motion.div animate={{ scaleY: [1, 2, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 0.2, delay: 0.1 }} className="w-full h-4 bg-red-400 blur-[2px] mt-1" />
                </div>
              </div>
            </motion.div>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default Chatbot;