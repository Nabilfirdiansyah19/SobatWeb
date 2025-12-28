import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, MessageSquare, Phone } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Halo! Saya Core-AI. Ada yang bisa kami bantu hari ini?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // --- CONFIGURATION: Opsi Pertanyaan & Jawaban ---
  const options = [
    { 
      q: 'Bahan pakaian apa yang digunakan?', 
      a: 'Kami menggunakan bahan Cotton Combed 24s kualitas premium yang tebal tapi tetap dingin dan menyerap keringat, cocok untuk iklim tropis.' 
    },
    { 
      q: 'Apakah bisa tukar ukuran (size)?', 
      a: 'Bisa! Kami menyediakan garansi tukar size maksimal 3 hari setelah barang diterima, asalkan tag label masih terpasang dan baju belum dicuci.' 
    },
    { 
      q: 'Berapa lama durasi pengirimannya?', 
      a: 'Untuk wilayah Jabodetabek biasanya 1-2 hari kerja. Luar pulau Jawa sekitar 3-5 hari kerja menggunakan ekspedisi reguler.' 
    },
    { 
      q: 'Ada promo atau diskon saat ini?', 
      a: 'Saat ini kami ada promo "Bundle Mix" (beli 3 lebih murah) dan gratis ongkir untuk pembelian minimal 300rb melalui WhatsApp.' 
    },
    { 
      q: 'Gimana cara cek resi pengiriman?', 
      a: 'Resi akan diupdate otomatis di malam hari setelah pengiriman. Kamu juga bisa tanya langsung ke admin WA kami dengan menyebutkan nomor order.' 
    },
  ];
  
  // Auto scroll ke bawah setiap ada pesan baru
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleOptionClick = (option) => {
    // Tambah pertanyaan user ke chat
    const newMessages = [...messages, { role: 'user', text: option.q }];
    setMessages(newMessages);
    
    // Simulasi bot sedang mengetik
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: option.a }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleWhatsApp = () => {
    const phone = "628123456789"; // GANTI DENGAN NO WA KAMU
    const text = "Halo Corebiz, saya ingin bertanya lebih lanjut...";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-10 right-10 z-[99999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-6 w-[350px] md:w-[400px] h-[550px] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-[2.5rem] border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-black italic uppercase tracking-tighter leading-none text-lg">Core-AI</h3>
                  <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Online Support</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-[1.5rem] text-sm font-medium shadow-sm border
                    ${msg.role === 'bot' 
                      ? 'bg-white text-slate-700 rounded-bl-none border-slate-100' 
                      : 'bg-indigo-600 text-white rounded-br-none border-indigo-500'}`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-slate-100 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Options & WA Button */}
            <div className="p-4 bg-white border-t border-slate-100 space-y-3 shrink-0">
              <div className="flex flex-wrap gap-2">
                {options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt)}
                    className="text-[11px] font-black uppercase tracking-tighter px-4 py-2 bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 rounded-full border border-slate-200 transition-all"
                  >
                    {opt.q}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-lg shadow-green-200 transition-all active:scale-95"
              >
                <Phone size={14} /> Tanya Via WhatsApp (Live Agent)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 bg-slate-900 text-white rounded-[2.5rem] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-indigo-600 transition-all relative border-4 border-white"
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;