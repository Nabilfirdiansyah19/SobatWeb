import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Phone, Bot } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { businessConfig } from '../config/businessConfig';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Welcome to Suit Palace. How may I assist you with your tailoring needs today?' }
  ]);
  const chatEndRef = useRef(null);

  const qa = [
    { q: 'How to book?', a: 'You can visit our boutique in Ruko Hampton (Tue-Sun) or schedule an appointment via WhatsApp for a private fitting.' },
    { q: 'Rental Duration?', a: 'Our standard rental is for 3 days. Extensions are available upon request during your fitting session.' },
    { q: 'Alterations?', a: 'Yes, we provide on-site minor alterations to ensure the suit fits your body silhouette perfectly.' }
  ];

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages, isTyping]);

  const handleAsk = (item) => {
    if (isTyping) return;
    
    // User message
    setMessages(prev => [...prev, { role: 'user', text: item.q }]);
    
    // Start Loading
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: item.a }]);
    }, 1500); // 1.5 detik loading
  };

  return (
    <div className="fixed bottom-10 right-10 z-1000">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-6 w-87.5 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.2)] rounded-[2.5rem] border border-[#8D775F]/20 overflow-hidden"
          >
            <div className="bg-[#2C1E12] p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#8D775F] flex items-center justify-center"><Bot size={16}/></div>
                <span className="font-black italic uppercase text-[10px] tracking-widest">Palace Concierge</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={20}/></button>
            </div>

            <div className="h-80 overflow-y-auto p-6 space-y-4 bg-[#F4F4F4]/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[11px] font-bold leading-relaxed shadow-sm ${
                    m.role === 'user' ? 'bg-[#2C1E12] text-white rounded-tr-none' : 'bg-white text-slate-600 border border-slate-100 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex gap-1">
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-[#8D775F] rounded-full" />
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#8D775F] rounded-full" />
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#8D775F] rounded-full" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-slate-100 space-y-3">
              <div className="flex flex-wrap gap-2">
                {qa.map((item, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleAsk(item)} 
                    disabled={isTyping}
                    className="text-[9px] font-black uppercase px-4 py-2 bg-[#F4F4F4] rounded-full hover:bg-[#8D775F] hover:text-white transition-all disabled:opacity-50"
                  >
                    {item.q}
                  </button>
                ))}
              </div>
              <a href={businessConfig.waLink} className="w-full bg-[#25D366] text-white py-3 rounded-xl font-black uppercase text-[10px] flex items-center justify-center gap-2 shadow-lg shadow-green-100 hover:scale-[1.02] transition-transform">
                <Phone size={12} /> Live WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)} 
        className="w-20 h-20 bg-[#2C1E12] text-white rounded-[2.5rem] flex items-center justify-center shadow-2xl border-4 border-white relative"
      >
        <MessageSquare size={30} />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#8D775F] rounded-full border-2 border-white animate-pulse" />
      </motion.button>
    </div>
  );
};

export default Chatbot;