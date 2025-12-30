import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden bg-black text-white text-center px-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-125 h-75 md:h-125 bg-red-900/10 blur-[100px] md:blur-[150px] rounded-full" />

      <div className="container mx-auto relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-10 bg-white/5 border border-white/10 px-4 md:px-6 py-2 rounded-full w-fit"
        >
          <div className="flex text-red-600 gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
          </div>
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/60 italic">
            Kursus Stir No.1 Tangerang
          </span>
        </motion.div>

        {/* Headline - Ukuran disesuaikan untuk mobile */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-[8rem] lg:text-[9rem] font-black leading-[0.9] md:leading-[0.8] tracking-tighter mb-6 md:mb-8 italic uppercase flex flex-col items-center"
        >
          <span>JAGO NYETIR</span>
          <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            ANTI STRES.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-sm md:text-xl text-slate-400 max-w-70 sm:max-w-md md:max-w-2xl mb-8 md:mb-12 font-medium italic leading-relaxed"
        >
          "Belajar nyetir gak harus bikin stres! Pelatih sabar, humble, dan profesional."
        </motion.p>

        {/* Button */}
        <motion.div>
          <motion.a 
            href="https://wa.link/8zk4ql" 
            className="px-8 md:px-12 py-4 md:py-6 bg-red-600 text-white rounded-2xl md:rounded-3xl font-black uppercase italic tracking-widest md:tracking-[0.2em] flex items-center gap-3 md:gap-4 text-xs md:text-sm"
          >
            AMANKAN JADWAL <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>

      {/* Marquee - Dibuat lebih kecil di mobile */}
      <div className="absolute bottom-0 left-0 w-full bg-red-600 py-3 md:py-6 overflow-hidden border-t-2 border-black">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
          className="flex gap-8 md:gap-12 whitespace-nowrap"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-black text-sm md:text-2xl font-black uppercase italic tracking-tighter">
              • FREE ANTAR JEMPUT • DISKON S.D 300 RIBU • NO TIPS • MOBIL SAFETY •
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;