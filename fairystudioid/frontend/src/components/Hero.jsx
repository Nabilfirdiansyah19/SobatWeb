import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col bg-[#FFFDF9] overflow-hidden"
    >
      {/* Background Ornaments */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }} />
      
      {/* Container utama dengan padding top ekstra untuk Navbar */}
      <div className="container mx-auto px-6 pt-32 md:pt-48 pb-12 relative z-10 flex-grow flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* TEXT CONTENT - Selalu Pertama di Mobile & Desktop */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-6 bg-amber-50 w-fit px-4 py-2 rounded-full border border-amber-100 mx-auto lg:mx-0"
            >
              <Sparkles size={14} className="text-amber-600" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
                Established 2026 • Alam Sutera
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-[14vw] leading-[0.9] sm:text-7xl md:text-8xl lg:text-9xl font-serif italic text-amber-950 mb-6">
                The Art of <br />
                <span className="not-italic font-sans font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-amber-600 via-orange-500 to-amber-900">
                  Flying.
                </span>
              </h1>
              
              <p className="max-w-xl mx-auto lg:mx-0 text-amber-900/70 text-lg md:text-2xl font-medium leading-relaxed mb-10 px-4 lg:px-0">
                Studio Aerial & Yoga paling estetik yang menggabungkan kekuatan dan ketenangan jiwa.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 px-4 sm:px-0">
                <button className="w-full sm:w-auto px-10 py-5 bg-amber-950 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-amber-900/20">
                  Book Session <ArrowRight size={20} />
                </button>
                <button className="w-full sm:w-auto px-10 py-5 bg-white text-amber-950 border border-amber-200 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-amber-50 transition-all">
                  <Play size={18} fill="currentColor" /> Our Story
                </button>
              </div>
            </motion.div>
          </div>

          {/* IMAGE CONTENT - Muncul di bawah Teks pada Mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 mt-8 lg:mt-0 px-4 sm:px-12 lg:px-0"
          >
            <div className="relative group">
              {/* Main Decorative Frame */}
              <div className="absolute -inset-4 bg-amber-100/50 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
              
              <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800" 
                  alt="Aerial Yoga"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 to-transparent opacity-60" />
              </div>

              {/* Minimalist Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-2 md:-right-8 bg-white p-4 rounded-2xl shadow-lg border border-amber-50 hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white">
                  <Sparkles size={18} />
                </div>
                <div className="pr-4">
                  <p className="text-[10px] font-black text-amber-500 uppercase leading-none mb-1">Elite Studio</p>
                  <p className="text-sm font-bold text-amber-950">Alam Sutera</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[50%] h-[40%] bg-amber-100/30 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[30%] bg-orange-50/50 blur-[80px] rounded-full -z-10" />
    </section>
  );
};

export default Hero;