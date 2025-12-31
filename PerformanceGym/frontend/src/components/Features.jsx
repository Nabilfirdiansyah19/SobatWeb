import { motion } from 'framer-motion';
import { Zap, Shield, Star, Waves, Clock, Heart } from 'lucide-react';

const Features = () => {
    const featureItems = [
        { icon: <Zap />, title: "Les Mills Elite", desc: "Akses eksklusif ke program kelas dunia: RPM, Body Combat & Pump." },
        { icon: <Shield />, title: "Pro Equipment", desc: "Lini alat beban tercanggih untuk hasil presisi dan keamanan maksimal." },
        { icon: <Star />, title: "Personal Mastery", desc: "Pendampingan privat oleh pelatih bersertifikasi internasional." },
        { icon: <Waves />, title: "Recovery Suite", desc: "Fasilitas Sauna, Steam, dan Cold Plunge untuk pemulihan optimal." },
        { icon: <Clock />, title: "24/7 Energy", desc: "Fleksibilitas latihan sesuai ritme hidup Anda (06:00 - 22:00)." },
        { icon: <Heart />, title: "Elite Circle", desc: "Bergabung dengan komunitas positif yang mendorong batasan Anda." }
    ];

    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden" id="features">
            {/* Dekorasi Background */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-600/5 blur-[120px] rounded-full" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="flex justify-center flex-col items-cente w-full">
                        <h2 className="text-red-600 font-black italic tracking-[0.3em] text-center uppercase mb-4 text-sm">Our Ecosystem</h2>
                        <h3 className="text-5xl md:text-7xl font-black italic uppercase leading-none text-center text-white">
                            ARENA <br /> <span className="text-red-600 italic">TANPA BATAS</span>
                        </h3>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featureItems.map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-10 rounded-[40px] bg-[#0a0a0a] border border-white/5 hover:border-red-600/50 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute -right-4 -bottom-4 text-white/[0.02] group-hover:text-red-600/5 transition-colors duration-500">
                                {item.icon && <div className="scale-[5]">{item.icon}</div>}
                            </div>
                            
                            <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-600 mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                                {item.icon}
                            </div>
                            <h4 className="text-2xl font-bold mb-4 text-white uppercase italic tracking-tight">{item.title}</h4>
                            <p className="text-gray-500 leading-relaxed font-medium group-hover:text-gray-300 transition-colors">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;