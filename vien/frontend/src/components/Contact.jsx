import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Pencil, Ruler, Compass } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-20 overflow-hidden">
      {/* Objek Dekoratif Arsitektural di Background */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[10%] text-[#D4AF37]/5 pointer-events-none"
      >
        <Compass size={400} strokeWidth={0.5} />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Sisi Kiri: Narasi & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <motion.span 
                initial={{ letterSpacing: "0.1em" }}
                whileInView={{ letterSpacing: "0.5em" }}
                className="text-[#D4AF37] font-bold uppercase text-xs block mb-4"
              >
                Inquiry
              </motion.span>
              <h2 className="text-6xl md:text-8xl font-serif text-[#1A1A1A] leading-none mb-6">
                Start Your <br />
                <span className="italic text-[#D4AF37]">Journey.</span>
              </h2>
              <p className="text-slate-500 font-light text-lg max-w-md leading-relaxed">
                Setiap mahakarya dimulai dengan satu percakapan sederhana. Ceritakan visi Anda, dan biarkan kami mengubahnya menjadi realitas yang megah.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Studio", val: "Jabodetabek, Indonesia" },
                { icon: Phone, label: "WhatsApp", val: "+62 819 3879 3245" },
                { icon: Mail, label: "Email", val: "hello@vieninterior.com" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white border border-[#D4AF37]/20 flex items-center justify-center rounded-2xl group-hover:bg-[#D4AF37] group-hover:text-white transition-all shadow-sm">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-1">{item.label}</p>
                    <p className="text-sm font-medium text-[#1A1A1A]">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sisi Kanan: Form Glassmorphism */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dekorasi Garis di Belakang Form */}
            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-[#D4AF37]/20 rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
            
            <form className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-white">
              <div className="grid gap-8">
                <div className="relative">
                  <input type="text" required className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-[#D4AF37] text-sm transition-all peer" />
                  <label className="absolute left-0 top-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[#D4AF37]">Full Name</label>
                </div>

                <div className="relative">
                  <input type="email" required className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-[#D4AF37] text-sm transition-all peer" />
                  <label className="absolute left-0 top-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[#D4AF37]">Email Address</label>
                </div>

                <div className="relative">
                  <textarea rows="3" required className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-[#D4AF37] text-sm transition-all peer resize-none"></textarea>
                  <label className="absolute left-0 top-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[#D4AF37]">Project Brief (Optional)</label>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#1A1A1A] text-white py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#D4AF37] transition-all shadow-xl shadow-black/10"
                >
                  <Send size={14} /> Send Message
                </motion.button>
              </div>
            </form>

            {/* Ikon Dekoratif Tambahan */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-[#D4AF37]/20"
            >
              <Pencil className="text-[#D4AF37]" size={24} />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;