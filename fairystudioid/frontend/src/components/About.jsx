import { motion } from "framer-motion";
import { Sparkles, Heart, Star, Wind } from "lucide-react";

const About = () => {
  const perks = [
    { icon: Wind, label: "Aerial Experts", desc: "Spesialis Hammock & Hoop." },
    { icon: Heart, label: "Mindful Yoga", desc: "Keseimbangan jiwa & raga." },
    { icon: Star, label: "Elite Studio", desc: "Fasilitas premium & nyaman." },
    { icon: Sparkles, label: "Magic Vibes", desc: "Komunitas yang suportif." },
  ];

  return (
    <section id="about" className="py-32 bg-[#FFFDF9]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute -inset-4 border border-amber-200 rounded-[3rem] rotate-3 -z-10" />
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800"
            alt="Yoga Practice"
            className="rounded-[3rem] shadow-2xl border-4 border-white object-cover h-[500px] w-full"
          />
        </motion.div>

        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-5xl font-serif italic text-amber-900 mb-6">
              Find Your <span className="text-amber-600 font-sans font-bold not-italic">Wings.</span>
            </h2>
            <p className="text-amber-800/70 leading-relaxed text-lg mb-8">
              Fairy Studio adalah ruang bagi Anda untuk bertumbuh dan menemukan keajaiban dalam diri. 
              Berlokasi di Alam Sutera, kami menawarkan pengalaman Aerial dan Yoga yang eksklusif 
              untuk membantu Anda mencapai fleksibilitas dan ketenangan maksimal.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-[#FAF7F2] rounded-3xl border border-amber-100 hover:shadow-lg transition-all"
              >
                <p.icon className="text-amber-600 mb-3" size={24} />
                <h4 className="font-bold text-amber-900 text-sm mb-1">{p.label}</h4>
                <p className="text-amber-800/60 text-xs">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;