import { motion } from "framer-motion";
import { Heart, Users, Sparkles, Target } from "lucide-react";

const About = () => {
  const features = [
    { icon: Heart, title: "Mindful Movement", desc: "Connect your mind and body." },
    { icon: Users, title: "Small Group", desc: "Max 5 pax for personal attention." },
    { icon: Target, title: "Expert Trainer", desc: "Certified and friendly coaches." },
    { icon: Sparkles, title: "Aesthetic Space", desc: "Comfortable & calming studio." }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif text-[#5D4037] mb-8 leading-tight">
              Believe in <br/><span className="text-[#8D6E63] italic font-light">the power of you.</span>
            </h2>
            <p className="text-[#8D6E63] text-lg mb-12 max-w-md leading-relaxed">
              Everlates dirancang untuk semua orang. Kami percaya bahwa setiap gerakan adalah langkah menuju versi diri yang lebih baik. Dengan fokus pada grup kecil, kami memastikan setiap postur Anda sempurna.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="p-6 rounded-3xl bg-[#FDFCFB] border border-[#8D6E63]/10 hover:border-[#8D6E63]/30 transition-colors">
                  <f.icon className="text-[#8D6E63] mb-4" size={28} />
                  <h4 className="text-[#5D4037] font-bold text-sm mb-2 uppercase tracking-wider">{f.title}</h4>
                  <p className="text-[#8D6E63]/70 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
                <img 
                  src="logo.png" 
                  alt="Pilates Everlates" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D7CCC8] rounded-full -z-10 opacity-50 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;