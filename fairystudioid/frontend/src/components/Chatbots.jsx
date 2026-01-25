import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Bot, Phone } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Halo! Fairy-AI di sini. Ada yang bisa kami bantu seputar kelas Aerial & Yoga? 🧚🏻‍♀️' }]);
  
  const scrollRef = useRef(null);

  // Auto Scroll saat ada pesan baru
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const qa = [
    { q: 'Cek Promo New Year', a: 'Nikmati DISKON 12% untuk semua membership Hammock, Hoop & Yoga hingga 31 Januari 2026! ✨' },
    { q: 'Lokasi & Jadwal', a: 'Kami berlokasi di Alam Sutera, Tangerang. Jadwal kelas tersedia setiap Senin-Sabtu. Mau cek jamnya?' },
    { q: 'Cara Reservasi', a: 'Cukup klik tombol "WhatsApp Admin" di bawah untuk booking spot kamu atau tanya detail paket.' }
  ];

  const handleAsk = (item) => {
    setMessages(prev => [...prev, { role: 'user', text: item.q }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: item.a }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, originX: 1, originY: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="mb-4 w-[320px] md:w-[380px] h-[500px] bg-white shadow-2xl rounded-[2.5rem] border border-amber-100 overflow-hidden flex flex-col"
          >
            {/* Header: Tombol X Terkunci di Kanan */}
            <div className="bg-amber-900 p-6 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white"><Bot size={20} /></div>
                <div>
                  <h4 className="font-bold text-xs tracking-widest uppercase">Fairy AI</h4>
                  <p className="text-[10px] text-amber-200">Selalu Aktif ✨</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area with Auto Scroll */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#FFFDF9] scroll-smooth">
              {messages.map((msg, i) => (
                <motion.div initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }} animate={{ opacity: 1, x: 0 }} key={i} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`p-4 rounded-[1.5rem] text-xs font-bold leading-relaxed max-w-[80%] ${msg.role === 'bot' ? 'bg-white text-amber-900 border border-amber-100 shadow-sm' : 'bg-amber-600 text-white'}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-amber-50 text-amber-400 p-3 rounded-2xl text-[10px] font-bold animate-pulse">Fairy sedang mengetik...</div>
                </div>
              )}
            </div>

            {/* Footer / Input Options */}
            <div className="p-5 bg-white border-t border-amber-50 space-y-3">
              <div className="flex flex-wrap gap-2">
                {qa.map((item, i) => (
                  <button key={i} onClick={() => handleAsk(item)} className="text-[10px] font-black uppercase tracking-tighter px-4 py-2 bg-amber-50 text-amber-700 rounded-full hover:bg-amber-100 transition-all">
                    {item.q}
                  </button>
                ))}
              </div>
              <a href="https://wa.me/message/NDW55DJ2T3S6I1" target="_blank" className="w-full bg-green-500 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-green-100">
                <Phone size={14} /> WhatsApp Admin
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-amber-900 text-white rounded-full flex items-center justify-center shadow-2xl shadow-amber-900/20 border-4 border-white"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
};
export default Chatbot;