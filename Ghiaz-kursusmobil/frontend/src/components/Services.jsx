import { motion } from 'framer-motion';
import { CheckCircle2, Zap, UserCheck, Clock, ShieldCheck, Star } from 'lucide-react';

const Services = () => {
  // Animasi kontainer untuk efek muncul berurutan (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Animasi item individu dengan durasi lambat agar elegan
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const benefits = [
    { 
      title: "FREE Pendaftaran", 
      desc: "Tanpa biaya admin tersembunyi. Daftar langsung atur jadwal.", 
      icon: Zap 
    },
    { 
      title: "Belajar Nyetir Tanpa Panik", 
      desc: "Metode santai & instruktur sabar, bikin kamu mahir lebih cepat.", 
      icon: CheckCircle2 
    },
    { 
      title: "FREE Antar Jemput", 
      desc: "Khusus area Tangerang, pelatih jemput kamu tepat di depan rumah.", 
      icon: ShieldCheck 
    },
    { 
      title: "Jadwal Fleksibel", 
      desc: "Bisa latihan pagi, siang, atau sore sesuai waktu luangmu.", 
      icon: Clock 
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header - Center Aligned */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex justify-center gap-1 mb-4 text-red-600">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
          </div>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-slate-900 leading-none">
            LAYANAN <span className="text-red-600 font-black">UNGGULAN.</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mt-6 italic">
            Kursus Stir Mobil Ghiaz Drive Tangerang
          </p>
        </motion.div>

        {/* Grid Benefits - 1 Kolom di Mobile, 4 di Desktop */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center justify-center text-center group transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-red-100/50">
                <b.icon size={30} />
              </div>

              {/* Text Wrapper - Force Center for Mobile Symmetry */}
              <div className="flex flex-col items-center w-full">
                <h4 className="font-black uppercase italic mb-4 tracking-tighter text-base md:text-lg leading-tight text-slate-900">
                  {b.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed max-w-50 md:max-w-none">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Promo Banner - High Contrast */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-16 md:mt-24 p-8 md:p-16 bg-black rounded-[2.5rem] md:rounded-[4rem] text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-5xl font-black italic text-white uppercase tracking-tighter mb-8 leading-tight">
              DAPATKAN DISKON S.D <br className="md:hidden" />
              <span className="text-red-600">300 RIBU RUPIAH!</span>
            </h3>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.link/8zk4ql"
              className="inline-flex px-10 py-5 bg-red-600 text-white rounded-2xl font-black uppercase italic text-xs tracking-[0.2em] shadow-xl shadow-red-600/30 hover:bg-white hover:text-red-600 transition-all"
            >
              Hubungi Admin via WA
            </motion.a>
          </div>
          
          {/* Efek Cahaya Merah di Background Banner */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;