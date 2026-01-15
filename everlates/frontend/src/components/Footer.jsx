import { Instagram, MapPin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-[#8D6E63]/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <span className="font-serif font-bold text-2xl text-[#5D4037] mb-6 block">EVERLATES.</span>
            <p className="text-[#8D6E63]/70 text-sm leading-relaxed max-w-xs italic">
              "Your sanctuary for mindful movement in the heart of Gading Serpong."
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-[#5D4037] uppercase text-xs tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-[#8D6E63] text-sm font-medium">
              <li><a href="#about" className="hover:text-[#5D4037] transition-colors">Our Story</a></li>
              <li><a href="#schedule" className="hover:text-[#5D4037] transition-colors">Class Schedule</a></li>
              <li><a href="#price" className="hover:text-[#5D4037] transition-colors">Pricing Pack</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#5D4037] uppercase text-xs tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-[#8D6E63] text-sm font-medium">
              <li className="flex items-center gap-2"><MapPin size={16}/> Gading Serpong, Tangerang</li>
              <li className="flex items-center gap-2"><Instagram size={16}/> @everlates</li>
              <li className="flex items-center gap-2"><Mail size={16}/> hello@everlates.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#8D6E63]/10 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-[#8D6E63]/50 text-[10px] uppercase tracking-widest">© 2024 EVERLATES STUDIO. ALL RIGHTS RESERVED.</p>
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="p-3 rounded-full bg-[#FDFCFB] text-[#8D6E63] border border-[#8D6E63]/20">
            <ArrowUp size={16}/>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;