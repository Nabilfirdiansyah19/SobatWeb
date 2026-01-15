import { Skull, Instagram, Youtube, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-orange-600 p-2 rounded-xl text-white"><Skull size={28}/></div>
              <span className="font-black text-4xl text-white italic tracking-tighter uppercase">XSPACE<span className="text-orange-600">.</span></span>
            </div>
            <p className="text-zinc-500 text-lg max-w-md font-medium leading-relaxed italic">
              "Bukan sekadar hiburan, tapi pengujian nyali. Indonesia's #1 Immersive Entertainment Center."
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-white hover:bg-orange-600 transition-all"><Instagram size={20}/></a>
              <a href="#" className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-white hover:bg-orange-600 transition-all"><Youtube size={20}/></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase italic tracking-widest mb-8 text-xs text-orange-600">Locations</h4>
            <ul className="space-y-6 text-zinc-400 font-bold text-[11px] uppercase tracking-widest">
              <li className="flex flex-col gap-1">
                <span className="text-white">Blok M (Row 9)</span>
                <span className="text-[9px] text-zinc-600">Story & Roleplay Arena</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white">PIK 2 (IDD)</span>
                <span className="text-[9px] text-zinc-600">Immersive Experience Theater</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white">Hampton Square</span>
                <span className="text-[9px] text-zinc-600">Haunted House Adventure</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase italic tracking-widest mb-8 text-xs text-orange-600">Explore</h4>
            <ul className="space-y-4 text-zinc-500 font-bold text-[11px] uppercase tracking-widest">
              <li><a href="#home" className="hover:text-white flex items-center gap-2 group transition-colors">The Experience <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#gallery" className="hover:text-white flex items-center gap-2 group transition-colors">Hall of Fear <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#contact" className="hover:text-white flex items-center gap-2 group transition-colors">Join the Team <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-700 text-[9px] font-black uppercase tracking-[0.6em]">© 2024 XSPACE INDONESIA. NO REFUNDS FOR THE WEAK HEARTED.</p>
          <div className="flex gap-8 text-zinc-600 font-black text-[9px] uppercase tracking-widest">
             <span className="hover:text-orange-600 cursor-pointer">Safety Protocol</span>
             <span className="hover:text-orange-600 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;