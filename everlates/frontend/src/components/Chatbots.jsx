import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Loader2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { role: 'bot', text: 'Halo! Saya Eve. Ada yang bisa saya bantu mengenai latihan Pilates Anda hari ini?' }
  ]);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [chatHistory, isThinking, isOpen]);

  const qaPairs = [
    { q: "Berapa harga trial class?", a: "Khusus bulan ini, Trial Group Class hanya 99k dari harga normal 139k!" },
    { q: "Apakah pemula bisa ikut?", a: "Tentu! Kelas kami 'Pilates for Everyone'. Coach kami akan membimbing Anda dari dasar." },
    { q: "Dimana lokasi studionya?", a: "Kami berlokasi di Ruko Paramount Center Blok A no 25, Gading Serpong." }
  ];

  const handleQuestion = (question, answer) => {
    setChatHistory(prev => [...prev, { role: 'user', text: question }]);
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      setChatHistory(prev => [...prev, { role: 'bot', text: answer }]);
    }, 1200);
  };

  return (
    // Gunakan items-end agar semua elemen di dalamnya rata kanan
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-72 bg-white rounded-[2rem] shadow-2xl border border-[#8D6E63]/20 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#8D6E63] p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-serif italic text-sm">E</div>
                <div>
                  <h4 className="font-serif italic text-sm">Chat with Eve</h4>
                  <p className="text-[8px] uppercase tracking-widest opacity-80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="h-64 overflow-y-auto p-4 space-y-3 bg-[#FDFCFB] scrollbar-hide"
            >
              {chatHistory.map((chat, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={`flex ${chat.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-[11px] leading-relaxed shadow-sm ${
                    chat.role === 'bot' 
                    ? 'bg-white border border-[#8D6E63]/10 text-[#5D4037] rounded-tl-none' 
                    : 'bg-[#8D6E63] text-white rounded-tr-none'
                  }`}>
                    {chat.text}
                  </div>
                </motion.div>
              ))}
              
              {isThinking && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#8D6E63]/10 p-2 rounded-2xl flex items-center gap-2">
                    <Loader2 size={12} className="animate-spin text-[#8D6E63]" />
                    <span className="text-[9px] italic text-[#8D6E63]">Eve mengetik...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-[#8D6E63]/10 bg-white">
              <p className="text-[8px] font-bold text-[#8D6E63]/60 uppercase mb-2 tracking-widest">Pilih Pertanyaan:</p>
              <div className="flex flex-col gap-1.5">
                {qaPairs.map((item, i) => (
                  <button 
                    key={i}
                    onClick={() => handleQuestion(item.q, item.a)}
                    disabled={isThinking}
                    className="text-left text-[10px] p-2 rounded-xl border border-[#8D6E63]/10 hover:border-[#8D6E63] hover:bg-[#FDFCFB] text-[#5D4037] transition-all duration-200"
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button - Tetap di Kanan Bawah */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#8D6E63] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all relative group"
      >
        <div className="absolute inset-0 rounded-full bg-[#8D6E63] animate-ping opacity-20 group-hover:hidden" />
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default Chatbot;