import { motion } from 'framer-motion';
import { Check, Crown, Zap, Star } from 'lucide-react';

const Services = () => {
  const handleWA = (p) => window.open(`https://wa.me/message/NDW55DJ2T3S6I1?text=Halo Fairy Studio, saya tertarik paket ${p}`);

  return (
    <section id="services" className="py-20 md:py-32 bg-[#FAF7F2] relative overflow-hidden px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-serif italic text-amber-900 leading-none">Choose Your <br/><span className="text-amber-500">Practice.</span></h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-amber-800 font-black text-xs uppercase tracking-[0.4em]">Investment / Membership</p>
            <p className="text-amber-800/50 text-xs italic mt-2">New Year Promo 12% OFF Applied</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Card 1: Large Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 border border-amber-100 shadow-xl flex flex-col justify-between min-h-[500px]"
          >
            <div>
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-amber-50 rounded-2xl text-amber-600"><Crown size={40} /></div>
                <span className="px-6 py-2 bg-amber-500 text-white rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">Most Popular</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 uppercase tracking-tighter">Unlimited Fly</h3>
              <p className="text-amber-800/60 font-medium text-lg max-w-md mb-8">Akses penuh setiap hari ke seluruh kelas Aerial dan Yoga. Prioritas booking utama.</p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {["Daily Unlimited", "Free Mat Rental", "1 Guest Pass/mo", "Priority Booking"].map(f => (
                  <div key={f} className="flex items-center gap-3 text-[11px] font-black text-amber-800 uppercase tracking-widest">
                    <Check size={16} className="text-amber-500" /> {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-10 border-t border-amber-50">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-7xl font-serif italic font-black text-amber-500">1.200K</span>
                <span className="text-amber-800/40 font-bold uppercase text-xs">/ Month</span>
              </div>
              <button onClick={() => handleWA("Unlimited")} className="w-full sm:w-auto px-12 py-6 bg-amber-900 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-widest hover:bg-amber-800 transition-all">
                Get Started
              </button>
            </div>
          </motion.div>

          {/* Card 2: Tall Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 bg-amber-900 rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 text-white shadow-2xl shadow-amber-900/30 flex flex-col"
          >
            <div className="p-4 bg-white/10 rounded-2xl text-amber-400 w-fit mb-12"><Zap size={40} /></div>
            <h3 className="text-4xl font-bold mb-6 uppercase tracking-tighter">Standard <br/>Package</h3>
            <p className="text-amber-100/60 font-medium mb-12">Sempurna bagi Anda yang memiliki jadwal padat namun ingin tetap konsisten berlatih.</p>
            
            <div className="space-y-6 mb-16 flex-1">
              {["8 Sessions Any Class", "Validity 45 Days", "Certified Trainer"].map(f => (
                <div key={f} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-4">
                  <Star size={16} className="text-amber-500" fill="currentColor" /> {f}
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-serif italic font-black text-amber-500">850K</span>
                <span className="text-amber-100/40 font-bold uppercase text-xs">/ 8 Sessions</span>
              </div>
              <button onClick={() => handleWA("Standard")} className="w-full py-6 bg-white text-amber-900 rounded-[2rem] font-black uppercase text-[10px] tracking-widest hover:bg-amber-50 transition-all">
                Select Plan
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default Services;