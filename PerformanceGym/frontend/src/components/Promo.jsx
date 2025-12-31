import { motion } from 'framer-motion';

const Promo = () => {
    return (
        <section className="py-10 md:py-20 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div 
                    whileInView={{ opacity: [0, 1] }}
                    className="relative rounded-[40px] md:rounded-[60px] overflow-hidden bg-gradient-to-br from-red-700 to-red-950 p-8 md:p-20 shadow-[0_0_50px_rgba(220,38,38,0.15)]"
                >
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    
                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-block bg-black/30 backdrop-blur-sm text-white px-4 py-1.5 rounded-full font-black text-[9px] tracking-widest uppercase mb-6">
                                🔥 Limited Time Offer
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black italic uppercase text-white leading-none mb-6">
                                NEW YEAR <br /> <span className="text-black">LETHAL</span> <br /> OFFER
                            </h2>
                            <p className="text-white/80 text-sm md:text-lg font-bold mb-8">
                                Bergabung sekarang dan dapatkan diskon 60% untuk paket tahunan.
                            </p>
                            
                            {/* Countdown Mobile Friendly */}
                            <div className="flex justify-center lg:justify-start gap-4 mb-8">
                                <div className="bg-black/40 p-4 rounded-2xl min-w-[70px]">
                                    <span className="block text-2xl md:text-3xl font-black text-white italic">07</span>
                                    <span className="text-[8px] uppercase font-black text-white/50 tracking-widest">Days</span>
                                </div>
                                <div className="bg-black/40 p-4 rounded-2xl min-w-[70px]">
                                    <span className="block text-2xl md:text-3xl font-black text-white italic">12</span>
                                    <span className="text-[8px] uppercase font-black text-white/50 tracking-widest">Hours</span>
                                </div>
                                <div className="bg-black/40 p-4 rounded-2xl min-w-[70px]">
                                    <span className="block text-2xl md:text-3xl font-black text-white italic">45</span>
                                    <span className="text-[8px] uppercase font-black text-white/50 tracking-widest">Mins</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Content / Card Benefit */}
                        <div className="bg-black/20 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-[30px] md:rounded-[40px]">
                            <h4 className="text-lg md:text-xl font-black italic text-white mb-6 uppercase tracking-tight">Presale Benefits:</h4>
                            <ul className="space-y-3 mb-8">
                                {['Free PT Sessions', 'IronClad Kit Bag', 'All Class Access'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-white/90 font-bold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div> {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-white text-black py-4 md:py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-black hover:text-white transition-all">
                                CLAIM PROMO NOW
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Promo;