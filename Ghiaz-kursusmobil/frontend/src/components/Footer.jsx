import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Copyright - Rata Tengah di Mobile */}
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] text-center md:text-left order-2 md:order-1">
          © 2025 GHIAZ KURSUS STIR MOBIL. ALL RIGHTS RESERVED.
        </p>

        {/* Branding & Instagram - Rata Tengah di Mobile */}
        <div className="flex flex-col md:flex-row items-center gap-6 order-1 md:order-2">
          {/* Instagram Link */}
          <a 
            href="https://www.instagram.com/ghiaz_kursusstirmobiltangerang/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-red-600 transition-all group"
          >
            <Instagram size={18} />
            <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">Instagram</span>
          </a>

          {/* Hashtag */}
          <div className="text-red-600 font-black italic tracking-tighter text-lg md:text-base">
            #UPGRADESKILL
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;