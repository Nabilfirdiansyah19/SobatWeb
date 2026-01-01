import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  Armchair, 
  Gem, 
  Sparkles, 
  Hotel, 
  Trees, 
  Crown, 
  Maximize, 
  Layers 
} from "lucide-react";

const BackgroundJourney = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  // Komponen Helper untuk Ikon Dekoratif Luxury
  const DecoIcon = ({ Icon, top, left, delay, rotateValue, size = 140 }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.12 }} // Lebih samar agar elegan
      transition={{ delay }}
      style={{ 
        top, 
        left, 
        rotate: rotateValue,
        y: yParallax 
      }}
      className="absolute z-0 pointer-events-none text-[#D4AF37]"
    >
      <Icon size={size} strokeWidth={0.3} /> {/* Stroke sangat tipis agar mewah */}
    </motion.div>
  );

  return (
    <div className="fixed inset-0 z-0 bg-[#FDFBF7] overflow-hidden">
      
      {/* 1. Tekstur Grid Marmer (Bukan Blueprint kasar) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[size:100px_100px] bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)]" />
      
      {/* 2. Garis Perjalanan Emas (Journey Line) */}
      <motion.div 
        style={{ scaleY }}
        className="absolute left-4 md:left-20 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent origin-top"
      />

      {/* 3. Objek Luxury Melayang - Simbol Interior & Lifestyle */}
      
      {/* Simbol Kenyamanan (Sofa/Armchair) */}
      <DecoIcon Icon={Armchair} top="15%" left="80%" delay={0.2} rotateValue={10} size={180} />
      
      {/* Simbol Kemewahan (Gem/Diamond) */}
      <DecoIcon Icon={Gem} top="35%" left="5%" delay={0.4} rotateValue={-15} size={120} />
      
      {/* Simbol Estetika (Sparkles) */}
      <DecoIcon Icon={Sparkles} top="50%" left="85%" delay={0.6} rotateValue={0} size={100} />
      
      {/* Simbol Arsitektur (Hotel/Building) */}
      <DecoIcon Icon={Hotel} top="65%" left="10%" delay={0.8} rotateValue={5} size={150} />
      
      {/* Simbol Biophilic Design (Trees/Alam) */}
      <DecoIcon Icon={Trees} top="85%" left="75%" delay={1} rotateValue={-10} size={160} />
      
      {/* Simbol Presisi Ruang (Maximize/Dimension) */}
      <DecoIcon Icon={Maximize} top="40%" left="40%" delay={1.2} rotateValue={45} size={80} />

      {/* 4. Tipografi Watermark Journey */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [600, -1500]) }}
        className="absolute left-[-5%] select-none pointer-events-none whitespace-nowrap"
      >
        <h2 className="text-[15rem] md:text-[25rem] font-serif font-black text-[#1A1A1A]/[0.015] uppercase tracking-tighter">
          Exclusive<br />Living
        </h2>
      </motion.div>

      {/* 5. Ambiance Lighting */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[150px] rounded-full" />
      <div className="absolute middle-0 left-[-20%] w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
      
      {/* Grain Texture untuk kesan Fine Art Paper */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
    </div>
  );
};

export default BackgroundJourney;