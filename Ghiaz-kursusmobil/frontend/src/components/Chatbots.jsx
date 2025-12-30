import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, MessageSquare, Phone } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Halo! Ada yang bisa kami bantu mengenai kursus stir GhiazDrive?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // Pertanyaan diubah agar lebih informatif (tidak satu kata)
  const options = [
    { q: 'Lokasi latihannya di mana?', a: 'Kami melayani antar-jemput khusus area Tangerang & sekitarnya, langsung ke rumah Anda!' },
    { q: 'Info harga & promo terbaru?', a: 'Ada diskon s.d 300rb! Admin kami akan mengirimkan daftar harga lengkap via WhatsApp.' },
    { q: 'Apakah cocok untuk pemula?', a: 'Tentu! Instruktur kami sangat sabar dan humble untuk pemula.' }
  ];

  const handleOptionClick = (option) => {
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
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-9999 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[88vw] sm:w-87.5 md:w-95 bg-white rounded-4xl shadow-2xl border border-slate-100 overflow-hidden mb-4 flex flex-col max-h-[65vh] md:max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-red-600 p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                  <Bot size={20} />
                </div>
                <h3 className="text-white font-black italic uppercase tracking-tighter text-sm">Ghiaz-Bot</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 p-1">
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50 min-h-45">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-[12px] md:text-sm font-medium ${
                    msg.role === 'bot' 
                      ? 'bg-white text-slate-700 border border-slate-100' 
                      : 'bg-red-600 text-white shadow-md shadow-red-200'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl border border-slate-100 flex gap-1">
                    <div className="w-1 h-1 bg-red-600 rounded-full animate-bounce" />
                    <div className="w-1 h-1 bg-red-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1 h-1 bg-red-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies & WhatsApp Button */}
            <div className="p-4 bg-white border-t border-slate-100 space-y-4">
              <div className="flex flex-col gap-2">
                {options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt)}
                    className="text-[10px] font-bold uppercase italic px-4 py-2 bg-slate-50 hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-xl border border-slate-200 transition-all text-left"
                  >
                    {opt.q}
                  </button>
                ))}
              </div>
              
              {/* Button WhatsApp lebih mencolok dengan warna hijau terang dan teks tebal */}
              <a 
                href="https://wa.link/8zk4ql"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-black uppercase italic tracking-widest text-[11px] flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(37,211,102,0.3)] transition-all active:scale-95"
              >
                <Phone size={14} fill="currentColor" /> HUBUNGI ADMIN (WA)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tombol Launcher */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-xl relative border-2 border-white"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;