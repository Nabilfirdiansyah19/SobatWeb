import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [active, setActive] = useState(null);
    const faqs = [
        { q: "Apakah ada biaya pendaftaran?", a: "Tidak ada biaya pendaftaran tersembunyi. Semua transparan sejak awal." },
        { q: "Bisakah saya membekukan membership?", a: "Ya, kami menyediakan fasilitas freeze hingga 3 bulan per tahun." },
        { q: "Apa fasilitas recovery yang tersedia?", a: "Kami memiliki Sauna, Steam Room, dan area relaksasi eksklusif." }
    ];

    return (
        <section className="py-32 bg-[#000000]" id="faq">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-black italic uppercase text-center mb-16 text-white">FREQUENTLY <span className="text-red-600">ASKED</span></h2>
                
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all hover:border-red-600/30">
                            <button 
                                className="w-full p-8 text-left flex justify-between items-center"
                                onClick={() => setActive(active === i ? null : i)}
                            >
                                <span className="font-bold text-lg text-white uppercase italic">{faq.q}</span>
                                {active === i ? <Minus className="text-red-600" /> : <Plus />}
                            </button>
                            <AnimatePresence>
                                {active === i && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-8 pb-8 text-gray-500 font-medium leading-relaxed"
                                    >
                                        {faq.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;