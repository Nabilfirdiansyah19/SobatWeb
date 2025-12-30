import { motion } from "framer-motion";
import { ShieldCheck, Star, Users, MapPin } from "lucide-react";

const About = () => {
  const perks = [
    { 
      icon: ShieldCheck, 
      label: "Izin Resmi", 
      desc: "Lembaga kursus terpercaya dan berizin." 
    },
    { 
      icon: Star, 
      label: "Instruktur Pro", 
      desc: "Sabar, humble, dan berpengalaman bertahun-tahun." 
    },
    { 
      icon: Users, 
      label: "Ribuan Alumni", 
      desc: "Telah membantu ribuan siswa mahir menyetir." 
    },
    { 
      icon: MapPin, 
      label: "Area Luas", 
      desc: "Melayani berbagai area di Tangerang & sekitarnya." 
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Gambar - Muncul di atas pada mobile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-1"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800"
              alt="GhiazDrive Learning"
              className="rounded-[2.5rem] md:rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover h-75 md:h-125"
            />
            {/* Dekorasi Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-3xl shadow-xl hidden md:block">
              <p className="font-black italic text-2xl uppercase">10+ Thn</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Pengalaman</p>
            </div>
          </div>
        </motion.div>

        {/* Konten Teks */}
        <div className="order-2 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8 leading-tight tracking-tighter text-slate-900">
              BELAJAR NYETIR <br />
              <span className="text-red-600">TANPA PANIK.</span>
            </h2>
            <p className="text-slate-500 font-medium mb-10 leading-relaxed text-sm md:text-base">
              Ghiaz hadir untuk memberikan pengalaman belajar menyetir yang aman, nyaman, dan tanpa tekanan. Kami percaya setiap orang bisa menjadi pengemudi yang handal dengan bimbingan yang tepat.
            </p>
          </motion.div>

          {/* Grid Kartu - 1 kolom di mobile kecil, 2 kolom di tablet ke atas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 bg-white rounded-4xl shadow-sm border border-slate-100 flex flex-col items-center md:items-start text-center md:text-left group"
              >
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <p.icon size={24} />
                </div>
                <h4 className="font-black uppercase italic text-sm mb-1 tracking-tight">{p.label}</h4>
                <p className="text-[11px] text-slate-500 font-medium leading-snug">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;