import { motion } from "framer-motion";
import { Ghost, Swords, Theater, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    { icon: Ghost, title: "Haunted House", desc: "Live actors & cinematic sets." },
    { icon: Swords, title: "Action Roleplay", desc: "Be the hero of your story." },
    { icon: Theater, title: "Immersive Room", desc: "360 sensory entertainment." },
    { icon: Sparkles, title: "Special Effects", desc: "Professional SFX & Audio." }
  ];

  return (
    <section id="about" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-8 leading-none">
              BEYOND <br/><span className="text-orange-600">REALITY.</span>
            </h2>
            <p className="text-zinc-500 text-lg mb-12 max-w-md font-medium">
              XSPACE menyediakan ruang hiburan di mana kamu tidak hanya menonton, tapi masuk ke dalam cerita yang mencekam.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="p-6 rounded-3xl bg-zinc-900/50 border border-white/5">
                  <f.icon className="text-orange-600 mb-4" size={32} />
                  <h4 className="text-white font-black uppercase italic text-sm mb-2">{f.title}</h4>
                  <p className="text-zinc-600 text-[10px] font-bold uppercase">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BAGIAN FOTO YANG DIGANTI */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="aspect-square rounded-[4rem] overflow-hidden border border-orange-600/20 shadow-[0_0_50px_rgba(255,95,0,0.1)]">
                <img 
                  src="/logo.png" 
                  alt="XSPACE Experience" 
                  className="w-full h-full object-cover transition-all duration-700"
                />
             </div>
             {/* Dekorasi Aksen */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-600 rounded-full blur-[80px] opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;