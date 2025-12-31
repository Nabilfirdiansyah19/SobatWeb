import { motion } from 'framer-motion';
import { Flame, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]" id="home">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-red-600/20 blur-[120px] rounded-full"
                />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="inline-flex items-center gap-2 bg-red-600/10 backdrop-blur-md px-4 py-2 rounded-full border border-red-600/30 mb-6"
                >
                    <Flame size={14} className="text-red-500" />
                    <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase text-red-500">No Excuses • Only Results</span>
                </motion.div>

                <motion.h1 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-5xl md:text-[11rem] font-black italic leading-[0.9] md:leading-[0.8] uppercase tracking-tighter mb-8"
                >
                    <span className="text-white">BREAK</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">LIMITS</span>
                </motion.h1>

                <motion.p 
                    className="max-w-xl mx-auto text-gray-400 text-sm md:text-xl mb-10 font-medium px-4"
                >
                    Arena transformasi elit. Fasilitas berstandar dunia untuk hasil yang nyata.
                </motion.p>

                <motion.div>
                    {/* Ukuran tombol diatur: py-4 di mobile, py-6 di desktop */}
                    <button className="group relative bg-red-600 text-white px-10 py-4 md:px-14 md:py-6 rounded-full font-black text-xs md:text-sm tracking-widest transition-all hover:bg-red-700 active:scale-95 shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                        <span className="relative z-10 flex items-center gap-3">
                            DAFTAR SEKARANG <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;