import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#E2E8F0] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-200/30 blur-[150px] rounded-full z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-stretch">
          
          {/* Form Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/30 backdrop-blur-2xl border border-white/80 rounded-[4rem] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]"
          >
            <h2 className="text-5xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter leading-tight">
              Get In <span className="text-indigo-600">Touch.</span>
            </h2>
            <form className="space-y-6">
              <input type="text" placeholder="Full Name" className="w-full bg-white/40 border border-white/60 rounded-2xl px-6 py-5 outline-none focus:bg-white/70 transition-all font-bold placeholder:text-slate-400" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/40 border border-white/60 rounded-2xl px-6 py-5 outline-none focus:bg-white/70 transition-all font-bold placeholder:text-slate-400" />
              <textarea placeholder="Tell us about your project" rows="4" className="w-full bg-white/40 border border-white/60 rounded-[2.5rem] px-6 py-5 outline-none focus:bg-white/70 transition-all font-bold resize-none placeholder:text-slate-400"></textarea>
              <button className="w-full bg-indigo-600 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center justify-center gap-3">
                Send Vision <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Map Panel Terpisah */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative min-h-[500px] bg-white/30 backdrop-blur-2xl border border-white/80 rounded-[4rem] p-5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24172037!2d106.759478!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4d430bcad%3A0x628043c7cf720f40!2sJakarta%20Selatan!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              className="w-full h-full rounded-[3rem] grayscale contrast-125 opacity-90"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            
            <div className="absolute bottom-12 left-12 right-12">
              <div className="bg-white/70 backdrop-blur-2xl border border-white p-6 rounded-[2.5rem] shadow-2xl flex items-center gap-5">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg"><MapPin size={24}/></div>
                <div>
                  <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest leading-none mb-1">Our Studio</p>
                  <p className="text-sm font-bold text-slate-900 leading-tight">SCBD, District 8, Jakarta Selatan</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;