import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Dumbbell, Loader2, Bot, MessageCircle } from 'lucide-react';

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const chatRef = useRef(null);

    const faqs = [
        { q: "Biaya Membership?", a: "Mulai 350K/bulan! Paket Athlete mencakup Personal Trainer." },
        { q: "Fasilitas Recovery?", a: "Ada Sauna premium, Steam Room, dan Ice Bath eksklusif." },
        { q: "Jam Operasional?", a: "Setiap hari 06:00 - 22:00 WIB. Latihan kapan saja!" },
        { q: "Ada Kelas Group?", a: "Ya! Ada Yoga, HIIT, dan Powerlifting setiap harinya." }
    ];

    useEffect(() => {
        if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [messages, isTyping]);

    const handleAsk = (item) => {
        if (isTyping) return;
        setMessages(prev => [...prev, { role: 'user', text: item.q }]);
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { role: 'bot', text: item.a }]);
        }, 1200);
    };

    const CyberAthlete = () => (
        <motion.div 
            // MOBILE: Skala 0.5 (Setengah ukuran), DESKTOP: Skala 1.0
            className="relative flex flex-col items-center scale-[0.55] md:scale-100 origin-bottom-right"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-2xl text-[10px] font-black shadow-[0_10px_20px_rgba(220,38,38,0.4)] whitespace-nowrap border border-white/20">
                TANYA GYM-BOT
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-600 rotate-45"></div>
            </div>

            <div className="w-10 h-10 bg-zinc-800 rounded-xl border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-1 bg-red-500 absolute top-3 blur-[2px] animate-pulse"></div>
                <div className="flex gap-2 relative z-10">
                    <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_white]"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_white]"></div>
                </div>
            </div>

            <div className="relative mt-1">
                <div className="flex gap-1 justify-center">
                    <div className="w-8 h-6 bg-zinc-800 border-l-4 border-red-600 rounded-tl-xl shadow-lg"></div>
                    <div className="w-10 h-12 bg-zinc-800 border-x-2 border-zinc-700 rounded-b-xl flex items-center justify-center">
                         <div className="w-6 h-6 rounded-full bg-red-600/20 border border-red-500 flex items-center justify-center">
                            <Dumbbell size={12} className="text-red-500" />
                         </div>
                    </div>
                    <div className="w-8 h-6 bg-zinc-800 border-r-4 border-red-600 rounded-tr-xl shadow-lg"></div>
                </div>

                <motion.div 
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 -left-10 -right-10 flex justify-between items-center px-2"
                >
                    <div className="w-3 h-12 bg-zinc-900 border border-zinc-600 rounded-md"></div>
                    <div className="h-1.5 w-full bg-zinc-400 mx-[-4px] z-[-1] shadow-md"></div>
                    <div className="w-3 h-12 bg-zinc-900 border border-zinc-600 rounded-md"></div>
                </motion.div>
            </div>

            <div className="flex gap-6 mt-1">
                <div className="w-3 h-4 bg-zinc-700 rounded-b-lg border-t-2 border-red-500 shadow-[0_5px_15px_rgba(239,68,68,0.4)]"></div>
                <div className="w-3 h-4 bg-zinc-700 rounded-b-lg border-t-2 border-red-500 shadow-[0_5px_15px_rgba(239,68,68,0.4)]"></div>
            </div>
        </motion.div>
    );

    return (
        // MOBILE: Lebih menjorok ke pojok (bottom-4 right-4)
        <div className="fixed bottom-4 right-4 md:bottom-16 md:right-16 z-[1000] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        // MOBILE: Lebar cuma 280px, DESKTOP: 320px
                        className="mb-4 md:mb-8 w-[280px] md:w-[320px] bg-zinc-900 border border-white/10 rounded-[25px] md:rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col origin-bottom-right"
                    >
                        {/* Header - Lebih pendek di mobile */}
                        <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 md:p-6 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Bot size={18} className="text-white" />
                                <h4 className="text-white font-black uppercase text-[9px] md:text-[10px] tracking-widest leading-none italic">IRON-BOT</h4>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Chat Box - Pendek di mobile (180px) */}
                        <div ref={chatRef} className="h-[180px] md:h-[260px] overflow-y-auto p-4 md:p-6 space-y-3 bg-[#0a0a0a] scrollbar-hide">
                            <div className="flex justify-start">
                                <div className="bg-zinc-800 border border-white/5 p-3 rounded-xl rounded-tl-none max-w-[90%]">
                                    <p className="text-gray-300 text-[9px] md:text-[11px] font-bold italic">"Pilih pertanyaan Bro!"</p>
                                </div>
                            </div>

                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`${msg.role === 'user' ? 'bg-red-600 text-white' : 'bg-zinc-800 border border-white/5 text-gray-200'} p-3 rounded-xl ${msg.role === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'} max-w-[90%]`}>
                                        <p className="text-[9px] md:text-[11px] font-bold leading-relaxed">{msg.text}</p>
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex gap-2 items-center text-red-500 pl-2">
                                    <Loader2 size={12} className="animate-spin" />
                                    <span className="text-[8px] font-black tracking-widest uppercase italic">Analyzing...</span>
                                </div>
                            )}
                        </div>

                        {/* Action Area - Lebih rapat */}
                        <div className="p-4 md:p-6 bg-[#0a0a0a] border-t border-white/5 space-y-3">
                            <div className="grid grid-cols-1 gap-1.5">
                                {faqs.map((item, i) => (
                                    <button 
                                        key={i} 
                                        onClick={() => handleAsk(item)}
                                        disabled={isTyping}
                                        className="text-left text-[8px] md:text-[9px] font-black uppercase tracking-wider bg-zinc-800 hover:bg-red-600 border border-white/5 text-gray-400 hover:text-white px-3 py-2 rounded-lg transition-all"
                                    >
                                        {item.q}
                                    </button>
                                ))}
                            </div>
                            <a href="https://wa.me/xxxx" className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black rounded-xl font-black text-[8px] md:text-[9px] tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all shadow-xl uppercase">
                                <MessageCircle size={14} /> WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger Robot Button - Ukuran disesuaikan mobile */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="hover:scale-105 active:scale-90 transition-transform origin-bottom-right"
            >
                {!isOpen ? <CyberAthlete /> : (
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-2xl md:rounded-3xl flex items-center justify-center text-white shadow-[0_10px_20px_rgba(220,38,38,0.4)] border-2 border-white/20">
                        <X size={24} />
                    </div>
                )}
            </button>
        </div>
    );
};

export default FAQ;