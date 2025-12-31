import { motion } from 'framer-motion';
import { Instagram, ShieldCheck } from 'lucide-react';

const Trainers = () => {
    const trainers = [
        { name: "Ahmad Rifai", role: "Strength Expert", img: "👤" },
        { name: "David Kusuma", role: "HIIT Master", img: "👤" },
        { name: "Michelle Tan", role: "Nutritionist", img: "👤" }
    ];

    return (
        <section className="py-32 bg-[#050505]" id="trainers">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white mb-20">ELITE <span className="text-red-600">COMMANDER</span></h2>
                
                <div className="grid lg:grid-cols-3 gap-12">
                    {trainers.map((t, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ y: -15 }}
                            className="relative group p-10 rounded-[50px] bg-[#0a0a0a] border border-white/5 transition-all overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                            
                            <div className="relative w-40 h-40 mx-auto mb-10">
                                <div className="absolute inset-0 bg-red-600 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20"></div>
                                <div className="relative w-full h-full bg-[#111] border border-white/10 rounded-3xl flex items-center justify-center text-6xl">
                                    {t.img}
                                </div>
                            </div>

                            <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter mb-2">{t.name}</h3>
                            <p className="text-red-600 font-black text-xs uppercase tracking-[0.3em] mb-8">{t.role}</p>
                            
                            <div className="flex justify-center gap-4">
                                <button className="p-4 rounded-2xl bg-white/5 text-white hover:bg-red-600 transition-all">
                                    <Instagram size={20} />
                                </button>
                                <button className="px-8 rounded-2xl bg-white/5 text-[10px] font-black uppercase text-white hover:bg-white/10 border border-white/5">
                                    View Profile
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;