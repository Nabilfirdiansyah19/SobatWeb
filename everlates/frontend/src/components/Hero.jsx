import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  // Animasi untuk elemen dekoratif (Blobs)
  const blobVariants = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 90, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-[#FDFCFB] flex flex-col justify-center overflow-hidden"
    >
      {/* ASSET ANIMASI LATAR BELAKANG 
          Z-index 0 agar tetap di belakang teks
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Lingkaran Besar Statis dengan Border Halus */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border-[0.5px] border-[#8D6E63]/10 rounded-full" />
        
        {/* Blob Animasi 1 - Kanan Atas */}
        <motion.div
          variants={blobVariants}
          animate="animate"
          className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#8D6E63]/10 rounded-full blur-[80px]"
        />
        
        {/* Blob Animasi 2 - Kiri Bawah */}
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#5D4037]/5 rounded-full blur-[100px]"
        />

        {/* Orbit Lines (Garis Dekoratif) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-dashed border-[#8D6E63]/20 rounded-full"
        />
      </div>

      {/* KONTEN UTAMA 
          pt-32 untuk memberi ruang agar tidak tertutup Navbar
          pb-20 untuk memastikan bagian bawah tidak terpotong
      */}
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20 flex flex-col items-center text-center">
        
        {/* Badge Slogan */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-[#8D6E63] mb-6 bg-white/50 backdrop-blur-md px-5 py-2 rounded-full border border-[#8D6E63]/10"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span className="uppercase tracking-[0.4em] text-[10px] font-bold">Pilates for Everyone</span>
        </motion.div>

        {/* Judul Besar */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-[10rem] font-serif text-[#5D4037] leading-[0.85] mb-10"
        >
          Start with <br />
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="italic font-light text-[#8D6E63]"
          >
            YOU.
          </motion.span>
        </motion.h1>

        {/* Deskripsi */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[#8D6E63] text-base md:text-xl max-w-xl mb-12 leading-relaxed font-light"
        >
          Temukan keseimbangan antara kekuatan dan ketenangan pikiran. Everlates menghadirkan studio reformer eksklusif untuk transformasi diri Anda.
        </motion.p>

        {/* Tombol Aksi */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-5 mb-16"
        >
          <button className="bg-[#5D4037] text-white px-12 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#8D6E63] hover:shadow-2xl transition-all flex items-center justify-center gap-3 group">
            Book a Class 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white border border-[#5D4037] text-[#5D4037] px-12 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#5D4037] hover:text-white transition-all shadow-sm">
            View Schedule
          </button>
        </motion.div>

        {/* Floating Animated Badge (Trial Offer) */}
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative group cursor-default"
        >
          <div className="absolute inset-0 bg-[#8D6E63]/20 blur-xl rounded-full group-hover:bg-[#8D6E63]/30 transition-all" />
          <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-[3rem] shadow-2xl border border-[#8D6E63]/10">
            <p className="text-[#8D6E63] text-[10px] font-black uppercase tracking-[0.3em] mb-1">Special Launch</p>
            <p className="text-[#5D4037] text-4xl font-serif italic">Only 99k</p>
            <p className="text-[#8D6E63]/60 text-[9px] mt-2 tracking-widest uppercase italic">Trial Session</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;