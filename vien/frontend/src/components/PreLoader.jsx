import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Memberi waktu sedikit lebih lama dari progress bar agar user bisa melihat status 100%
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ 
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
          }}
          className="fixed inset-0 z-99999 bg-[#1A1A1A] flex flex-col items-center justify-center text-white overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            {/* Judul VIEN dengan kompensasi Spacing agar Center sempurna */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0em", filter: "blur(10px)" }}
              animate={{ opacity: 1, letterSpacing: "1em", filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-serif mb-6 ml-[1em] text-center"
            >
              VIEN
            </motion.h1>

            {/* Garis Tengah yang melebar dari tengah */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "80px", opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-px bg-[#D4AF37] mb-6"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] font-light ml-[0.6em]"
            >
              Curating Excellence
            </motion.p>
          </div>
          
          {/* Progress Bar di bagian bawah */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 md:w-64 h-px bg-white/10">
            <motion.div 
              className="h-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          
          </div>

          {/* Background Decor */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;