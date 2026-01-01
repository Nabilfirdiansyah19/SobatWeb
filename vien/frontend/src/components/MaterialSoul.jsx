import { motion } from "framer-motion";

const MaterialSoul = () => {
  return (
    // Tambahkan relative dan z-10 agar berada di atas BackgroundJourney
    <section className="relative z-10 py-32 bg-[#1A1A1A] text-white overflow-hidden">
      {/* Efek Glow tambahan di background gelap agar teks makin terbaca */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Sisi Gambar */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-4/5 overflow-hidden rounded-t-[12rem] rounded-b-2xl border border-white/10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                alt="Luxury Marble"
              />
            </motion.div>
            
            {/* Label Emas - Pastikan Z-index tinggi */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-[#D4AF37] p-8 md:p-12 shadow-2xl z-30"
            >
               <p className="text-[10px] font-black uppercase tracking-[0.5em] leading-relaxed text-[#1A1A1A]">
                 Curated<br/>Italian Marble<br/>Selection
               </p>
            </motion.div>
          </div>

          {/* Sisi Teks - Pastikan warna teks putih solid */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
                The Core Philosophy
              </span>
              <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] text-white mb-8">
                The Art of <br /> 
                <span className="italic text-[#D4AF37]">Materiality.</span>
              </h2>
              <p className="text-slate-300 font-light text-xl leading-relaxed max-w-lg">
                Kemewahan sejati tidak berteriak. Ia terasa melalui dinginnya marmer Carrara, hangatnya serat kayu Oak, dan presisi sambungan logam kuningan.
              </p>
            </motion.div>

            {/* Spek Detail */}
            <div className="pt-12 border-t border-white/20 space-y-8">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-between items-end"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block mb-2">Sourcing</span>
                  <span className="text-2xl font-serif text-white">Handpicked in Verona</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block mb-2">Grade</span>
                  <span className="text-2xl font-serif text-white">A+ Premium</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-between items-end"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block mb-2">Craftsmanship</span>
                  <span className="text-2xl font-serif text-white">Master Artisan Built</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block mb-2">Finish</span>
                  <span className="text-2xl font-serif text-white">Hand-Polished</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MaterialSoul;