import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, Loader2, Zap, Ghost, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("Sistem X-Core aktif. Ada yang perlu dibantu?");

  const brain = [
    { q: "Apa itu XSPACE?", a: "Indonesia's #1 Immersive Entertainment. Kami menyediakan wahana Haunted House & Story Roleplay kelas dunia!" },
    { q: "Lokasi & Jam Buka?", a: "Blok M, PIK 2, dan Hampton Square. Buka setiap hari dari jam 10:00 - 22:00 WIB." },
    { q: "Cara Reservasi?", a: "Klik tombol 'BOOK NOW' di menu utama atau langsung hubungi WhatsApp kami." }
  ];

  const askBot = (answer) => {
    setIsThinking(true);
    setCurrentMessage(""); 
    
    // Animasi simulasi bot sedang memproses jawaban
    setTimeout(() => {
      setIsThinking(false);
      setCurrentMessage(answer);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
      
      {/* Label Petunjuk (Muncul otomatis supaya orang tahu ini bot) */}
      {!isOpen && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="bg-orange-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2 shadow-lg border border-black"
        >
          X-BOT ONLINE
        </motion.div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="mb-4 w-[300px] bg-zinc-950 border border-orange-600/50 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(255,95,0,0.3)] backdrop-blur-xl"
          >
            {/* Header Chat */}
            <div className="bg-orange-600 p-5 flex justify-between items-center">
              <div className="flex items-center gap-2 text-white">
                <div className="relative">
                  <Ghost size={20} className={isThinking ? "animate-bounce" : ""} />
                  {isThinking && (
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                  )}
                </div>
                <span className="font-black text-[10px] tracking-[0.2em] uppercase italic">X-Core Intelligence</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Bubble Chat Display */}
              <div className="bg-zinc-900 border border-white/5 p-5 rounded-3xl min-h-[110px] flex items-center justify-center relative">
                <div className="absolute -bottom-2 left-6 w-4 h-4 bg-zinc-900 rotate-45 border-r border-b border-white/5"></div>
                
                {isThinking ? (
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="animate-spin text-orange-600" size={24} />
                    <span className="text-orange-600 font-black text-[9px] uppercase tracking-widest animate-pulse">Syncing...</span>
                  </div>
                ) : (
                  <motion.p 
                    initial={{ opacity: 0, y: 5 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="text-zinc-300 text-xs leading-relaxed text-center font-bold italic"
                  >
                    "{currentMessage}"
                  </motion.p>
                )}
              </div>

              {/* Pilihan Pertanyaan */}
              <div className="space-y-2">
                {brain.map((item, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02, x: 5, backgroundColor: "rgba(255,95,0,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => askBot(item.a)}
                    className="w-full text-left p-3 rounded-xl bg-black border border-white/10 text-[10px] text-white hover:border-orange-600 transition-all font-black uppercase italic flex justify-between items-center group"
                  >
                    {item.q}
                    <ChevronRight size={14} className="text-zinc-700 group-hover:text-orange-600 transition-colors" />
                  </motion.button>
                ))}
              </div>

              <a href="https://wa.me/628123456789" className="flex items-center justify-center gap-3 w-full bg-orange-600 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-500 transition-all shadow-lg shadow-orange-600/20">
                <Zap size={14} fill="currentColor" /> EMERGENCY WA OPERATOR
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Ghost Launcher Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 bg-orange-600 text-white rounded-[2.5rem] flex items-center justify-center shadow-2xl relative border-4 border-black group overflow-hidden"
      >
        {/* Efek Radar di belakang ikon Ghost */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 rounded-full bg-white -z-10"
        />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={32} strokeWidth={3} />
            </motion.div>
          ) : (
            <motion.div 
              key="ghost" 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              exit={{ y: -20, opacity: 0 }}
              className="flex flex-col items-center"
            >
              {/* Animasi Hantu Melayang Naik-Turun */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <Ghost size={32} fill="currentColor" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default Chatbot;