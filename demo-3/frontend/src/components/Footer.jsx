import { Instagram, Twitter, Globe, Send, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#E2E8F0] pt-10 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/40 backdrop-blur-[50px] border border-white/80 rounded-[4rem] p-12 md:p-16 shadow-[0_-30px_60px_rgba(0,0,0,0.05)]">
          <div className="grid md:grid-cols-4 gap-16">
            
            <div className="col-span-1 md:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">C</div>
                <span className="font-black text-2xl tracking-tighter italic uppercase text-slate-900">COREBIZ</span>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">Membangun masa depan digital dengan desain estetik dan performa kelas dunia.</p>
            </div>

            <div className="space-y-6">
              <h4 className="font-black uppercase text-xs tracking-[0.2em] text-indigo-600">Company</h4>
              <ul className="space-y-3 font-bold text-slate-600 text-sm italic">
                {['About Us', 'Our Services', 'Recent Projects', 'Client Testimonials'].map(item => (
                  <li key={item} className="hover:text-indigo-600 transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-black uppercase text-xs tracking-[0.2em] text-indigo-600">Contact</h4>
              <div className="space-y-3 text-slate-600 font-bold text-sm">
                <p className="flex items-center gap-2"><Mail size={14}/> hello@corebiz.com</p>
                <p className="flex items-center gap-2"><Phone size={14}/> +62 812 3456 789</p>
              </div>
            </div>

            <div className="space-y-6 text-right">
              <h4 className="font-black uppercase text-xs tracking-[0.2em] text-indigo-600">Stay Updated</h4>
              <div className="relative group">
                <input type="text" placeholder="Your Email" className="w-full bg-white/40 border border-white/60 rounded-2xl px-6 py-4 outline-none font-bold text-sm focus:bg-white/60 transition-all" />
                <button className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white px-4 rounded-xl hover:bg-indigo-600 transition-all shadow-lg"><Send size={16}/></button>
              </div>
            </div>

          </div>
          
          <div className="mt-16 pt-10 border-t border-indigo-200/30 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">© 2024 COREBIZ STUDIO. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Globe].map((Icon, i) => (
                <div key={i} className="w-12 h-12 bg-white/40 backdrop-blur-md border border-white rounded-full flex items-center justify-center text-slate-700 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer shadow-sm">
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;