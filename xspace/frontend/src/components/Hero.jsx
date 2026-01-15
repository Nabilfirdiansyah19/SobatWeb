import { motion } from "framer-motion";
import { Ghost, Zap, ArrowRight } from "lucide-react";
import { businessConfig } from '../config/businessConfig';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center">
      {/* Background Video atau Overlay Mask */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-[#050505]" />
        <img 
          src="https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?w=800" // Ganti dengan foto Haunted House XSPACE
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-600/30 mb-8 backdrop-blur-md">
            <Zap size={14} className="text-orange-500 fill-orange-500" />
            <span className="text-[10px] font-black uppercase text-orange-500 tracking-[0.3em]">Immersive Entertainment</span>
          </div>

          <h1 className="text-[12vw] md:text-[8rem] font-black text-white leading-[0.85] italic uppercase tracking-tighter mb-8">
            STEP INTO <br />
            <span className="text-transparent border-t-0 border-b-0" style={{ WebkitTextStroke: '2px #FF5F00' }}>THE UNKNOWN.</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-2xl max-w-2xl mb-12 font-medium leading-relaxed">
            Rasakan pengalaman <span className="text-white font-bold italic decoration-orange-600">Haunted House</span>, 
            <span className="text-white font-bold italic"> Story-based Roleplay</span>, dan sensasi horor imersif nomor 1 di Indonesia.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a href={`https://wa.me/${businessConfig.whatsapp}`} className="group bg-orange-600 text-white px-12 py-6 rounded-2xl font-black uppercase italic tracking-tighter hover:bg-orange-500 transition-all flex items-center justify-center gap-4 text-xl">
              BOOK YOUR EXPERIENCE <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <button className="px-12 py-6 rounded-2xl border border-white/20 text-white font-black uppercase italic tracking-tighter hover:bg-white/10 transition-all">
              WATCH TRAILER
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute right-[10%] bottom-[20%] hidden lg:block"
      >
        <div className="bg-zinc-900/80 border border-orange-600/50 p-8 rounded-[2.5rem] backdrop-blur-xl rotate-6 shadow-2xl">
          <Ghost size={40} className="text-orange-600 mb-4" />
          <p className="text-white font-black text-2xl uppercase italic tracking-tighter italic">NEW STORY:</p>
          <p className="text-orange-500 font-bold uppercase tracking-widest text-sm">THE HAMPTON CURSE</p>
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;