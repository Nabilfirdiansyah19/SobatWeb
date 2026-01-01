import { motion } from "framer-motion";

const steps = [
  { no: "01", title: "Visioning", desc: "Mendalami gaya hidup dan preferensi personal Anda." },
  { no: "02", title: "Schematic", desc: "Transformasi ide ke dalam denah teknis dan moodboard." },
  { no: "03", title: "Realization", desc: "Eksekusi presisi oleh tim artisan dan kontraktor ahli." }
];

const Process = () => {
  return (
    <section className="py-32 px-6 md:px-20 relative bg-[#FDFBF7]">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-serif mb-4">Our Method</h2>
          <div className="w-20 h-px bg-[#D4AF37] mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-1px bg-[#D4AF37]/20">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "#F9F6F0" }}
              className="bg-[#FDFBF7] p-16 flex flex-col items-center text-center space-y-6 transition-colors"
            >
              <span className="text-6xl font-serif text-[#D4AF37]/50">{step.no}</span>
              <h4 className="text-xl font-serif uppercase tracking-widest">{step.title}</h4>
              <p className="text-slate-500 text-sm font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;