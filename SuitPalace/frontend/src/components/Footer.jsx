import { Instagram, MapPin, Phone, ArrowUp, Globe } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#2C1E12] py-24 relative overflow-hidden text-[#D4C5B9]">
      {/* Decorative Statement */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#8D775F] to-transparent opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter leading-none">
              SUIT <br /> PALACE<span className="text-[#8D775F]">.</span>
            </h2>
            <p className="text-white/70 text-sm font-medium max-w-sm leading-relaxed italic">
              "The destination for gentlemen who understand that a well-fitted suit is the modern man's armor."
            </p>
            <div className="flex gap-4">
              {[Instagram, Globe, Phone].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-xl border border-white/20 flex items-center justify-center text-white hover:bg-[#8D775F] hover:border-[#8D775F] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8D775F]">Boutique Address</h4>
            <div className="space-y-6">
              <p className="text-sm font-bold text-white leading-relaxed max-w-xs italic">
                {businessConfig.address}
              </p>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-[#8D775F]">Consultation Hours</p>
                <p className="text-xs font-bold text-white/80 uppercase">{businessConfig.hours}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col items-end justify-between">
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-4 text-white/60 hover:text-white transition-all font-black text-[10px] uppercase tracking-widest"
            >
              Top <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#8D775F] group-hover:bg-[#8D775F] transition-all"><ArrowUp size={16} className="group-hover:text-white" /></div>
            </button>
            <div className="text-right">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8D775F] mb-2">Since 2024</p>
               <div className="h-px w-20 bg-[#8D775F] ml-auto"></div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.5em]">
            © 2025 SUIT PALACE TANGERANG • ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[9px] font-black text-[#8D775F] uppercase tracking-widest italic opacity-60">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;