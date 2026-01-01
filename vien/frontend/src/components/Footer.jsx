import { Instagram, Send, MapPin, Phone, Mail } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Footer = () => {
  return (
    <footer className="relative bg-[#1A1A1A] pt-32 pb-10 px-6 md:px-20 overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#D4AF37]/5 blur-[150px] rounded-full" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2 space-y-8">
            <h2 className="text-5xl font-serif">VIEN<span className="text-[#D4AF37]">.</span></h2>
            <p className="max-w-md text-slate-400 font-light leading-relaxed">
              Membangun hunian impian bukan lagi sekadar angan. Dengan VIEN.INTERIOR, setiap inci ruang Anda akan mendapatkan sentuhan profesional yang abadi. Mari mulai diskusi proyek Anda hari ini.
            </p>
            <div className="flex gap-4">
              <a href={businessConfig.instagram} className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all">
                <Instagram size={20} />
              </a>
              <a href={businessConfig.whatsapp} className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.3em]">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300 text-sm italic font-light"><MapPin size={16}/> Jabodetabek Area</div>
              <div className="flex items-center gap-3 text-slate-300 text-sm italic font-light"><Mail size={16}/> project@vieninterior.com</div>
              <div className="flex items-center gap-3 text-slate-300 text-sm italic font-light"><Phone size={16}/> +62 819 3879 3245</div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.3em]">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm uppercase tracking-widest font-bold">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.5em] text-slate-500">© 2026 VIEN.INTERIOR STUDIO. ALL RIGHTS RESERVED.</p>
          <p className="text-[9px] uppercase tracking-[0.5em] text-slate-500">Curated with Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;