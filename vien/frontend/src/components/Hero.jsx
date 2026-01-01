import { motion } from "framer-motion";
import { ChevronDown, MousePointer2 } from "lucide-react";
import { businessConfig } from "../config/businessConfig";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-svh flex flex-col justify-center items-center px-6 pt-24 pb-10 overflow-hidden">
      
      <div className="container mx-auto z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge - Responsive Padding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6 md:mb-10 bg-white/50 backdrop-blur-md px-5 py-2 rounded-full border border-[#D4AF37]/20 shadow-sm"
          >
            <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-ping" />
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1A1A1A]">
              Ready for 2026 Projects
            </span>
          </motion.div>

          {/* Title - Responsive Font Size */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[18vw] md:text-[11rem] font-serif leading-[0.8] text-[#1A1A1A] mb-8 md:mb-12"
          >
            VIEN<span className="text-[#D4AF37] italic">.</span>
          </motion.h1>

          {/* Desktop & Mobile Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-center max-w-6xl mt-4 w-full">
            
            {/* Left Content - Hidden on small mobile or centered */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.5 }}
              className="order-2 md:order-1"
            >
              <p className="text-center md:text-left text-[12px] md:text-sm text-slate-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                Kolektif kreatif yang mendedikasikan diri untuk menciptakan standar baru dalam kemewahan hunian modern.
              </p>
            </motion.div>

            {/* Center Button - Always on top/middle */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.7 }} 
              className="flex flex-col items-center order-1 md:order-2"
            >
              <a 
                href={businessConfig.whatsapp} 
                className="group relative bg-[#1A1A1A] text-white w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-2xl border border-[#D4AF37]/30"
              >
                <MousePointer2 className="mb-1 group-hover:rotate-12 transition-transform w-5 h-5" />
                <span className="text-[8px] font-bold uppercase tracking-widest">Start</span>
              </a>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.5 }}
              className="order-3"
            >
              <p className="text-center md:text-right text-[12px] md:text-sm text-slate-500 leading-relaxed italic max-w-xs mx-auto md:ml-auto">
                "Rumah adalah instalasi seni tempat Anda menghabiskan waktu paling berharga."
                <br /><span className="text-[#D4AF37] not-italic font-bold text-[10px]">— VIEN.STUDIO</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Hero - Fixed position responsive */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-6 md:bottom-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-bold text-slate-400">Scroll Journey</span>
        <ChevronDown size={16} className="text-[#D4AF37]" />
      </motion.div>
      
    </section>
  );
};

export default Hero;