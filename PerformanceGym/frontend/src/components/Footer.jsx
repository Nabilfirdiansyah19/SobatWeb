import { Dumbbell, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 text-3xl font-black italic tracking-tighter mb-8">
                            <Dumbbell className="text-red-600" size={32} />
                            <span className="text-white">GYM</span>
                        </div>
                        <p className="text-gray-500 font-medium leading-relaxed mb-8">
                            Arena terbaik untuk Anda yang tidak mengenal kata menyerah. Tempa kekuatan fisik dan mental Anda bersama kami.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-black uppercase italic mb-8 tracking-widest text-sm">Navigation</h4>
                        <ul className="space-y-4 text-gray-500 font-bold text-xs uppercase tracking-widest">
                            {['Home', 'Features', 'Schedule', 'Pricing', 'Trainers'].map(item => (
                                <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-red-600 transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black uppercase italic mb-8 tracking-widest text-sm">Office Hours</h4>
                        <ul className="space-y-4 text-gray-500 font-bold text-xs uppercase tracking-widest">
                            <li>Senin - Jumat: <span className="text-white">06:00 - 22:00</span></li>
                            <li>Sabtu - Minggu: <span className="text-white">08:00 - 20:00</span></li>
                            <li className="pt-4 text-red-600">Open on Holidays</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black uppercase italic mb-8 tracking-widest text-sm">Newsletter</h4>
                        <p className="text-gray-500 text-xs font-bold uppercase mb-6 tracking-widest">Dapatkan tips latihan & promo eksklusif.</p>
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="YOUR EMAIL" 
                                className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl py-4 px-6 text-white text-xs font-bold focus:border-red-600 outline-none transition-all"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-red-600 text-white px-4 rounded-xl text-[10px] font-black hover:bg-red-700 transition-all">
                                JOIN
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
                        © 2024 IRONCLAD GYM. BEYOND THE LIMITS.
                    </p>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;