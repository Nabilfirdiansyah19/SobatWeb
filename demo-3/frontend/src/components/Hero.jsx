import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX / 20);
    mouseY.set(e.clientY / 20);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-[#F8F9FB]"
    >
      {/* Parallax Orbs */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/40 blur-[120px] rounded-full -z-10 will-change-transform"
      />
      <motion.div
        style={{ x: smoothX.get() * -0.8, y: smoothY.get() * -0.8 }}
        className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-200/30 blur-[100px] rounded-full -z-10 will-change-transform"
      />

      <div className="container mx-auto px-6 text-center grow flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 mx-auto"
        >
          <Sparkles size={16} className="text-indigo-600" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            Official Web Store
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-6xl md:text-[8rem] font-black leading-[0.85] tracking-tighter mb-8 italic"
        >
          BORN TO <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-violet-600 to-indigo-400">
            BE p3.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-slate-500 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium"
        >
          Elevasi brand lokal menjadi standar global dengan kualitas material
          premium dan desain yang berani.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex justify-center"
        >
          <button className="px-10 py-5 bg-black text-white rounded-full font-bold flex items-center gap-3 hover:bg-indigo-600 transition-all duration-300 group shadow-xl shadow-indigo-100 hover:scale-105">
            Explore Collection
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="bg-slate-900 py-6 overflow-hidden whitespace-nowrap mt-20 -rotate-1">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 pr-10"
        >
          {[1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="text-white text-3xl font-black uppercase italic tracking-tighter opacity-80"
            >
              • NEW ARRIVALS • LIMITED DROP • WORLDWIDE SHIPPING •
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
