import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FAF7F2] pt-20 pb-10 border-t border-amber-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          <div className="space-y-4">
            <h4 className="font-serif italic text-2xl text-amber-900">Fairy Studio</h4>
            <p className="text-amber-800/60 text-sm leading-relaxed">Elevate your spirit and body with our specialized Aerial and Yoga classes in a sanctuary designed for your peace.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-900">Contact Us</h4>
            <div className="text-amber-800/70 space-y-2 text-sm">
              <p className="flex items-center justify-center md:justify-start gap-2"><MapPin size={14}/> Alam Sutera, Tangerang</p>
              <p className="flex items-center justify-center md:justify-start gap-2"><Phone size={14}/> +62 812-345-678</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-900">Follow Our Journey</h4>
            <a href="https://www.instagram.com/fairystudioid/" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-amber-100 rounded-full text-amber-700 hover:bg-amber-50 transition-all text-sm font-bold">
              <Instagram size={18} /> @fairystudioid
            </a>
          </div>
        </div>
        <div className="border-t border-amber-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-amber-900/40 uppercase tracking-widest">
          <p>© 2026 FAIRY STUDIO. ALL RIGHTS RESERVED.</p>
          <p>NEW YEAR, NEW MAGIC ✨</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;