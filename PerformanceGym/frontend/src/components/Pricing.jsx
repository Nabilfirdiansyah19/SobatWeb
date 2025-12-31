import { CheckCircle2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
    const plans = [
        { name: "Basic", price: "350K", color: "white/5", text: "text-white" },
        { name: "Pro", price: "650K", color: "red-600", text: "text-white", featured: true },
        { name: "Elite", price: "1.2JT", color: "white/5", text: "text-white" }
    ];

    return (
        <section className="py-32 bg-[#000000]" id="pricing">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white">Join The <span className="text-red-600">Cult</span></h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className={`p-12 rounded-[50px] border transition-all ${
                                plan.featured 
                                ? 'bg-red-800 border-red-200 shadow-[0_20px_80px_rgba(220,38,38,0.25)]' 
                                : 'bg-[#0a0a0a] border-white/10'
                            }`}
                        >
                            <h3 className={`text-xs font-black uppercase tracking-[0.4em] mb-10 ${plan.featured ? 'text-white/60' : 'text-red-600'}`}>
                                {plan.name} Membership
                            </h3>
                            <div className="text-6xl font-black italic text-white mb-10">
                                <span className="text-2xl not-italic">Rp</span>{plan.price}
                                <sub className="text-[10px] block opacity-50 uppercase tracking-widest mt-2">/ month</sub>
                            </div>
                            <ul className="space-y-4 mb-12">
                                {[1, 2, 3, 4].map((f) => (
                                    <li key={f} className={`flex items-center gap-3 font-bold text-sm ${plan.featured ? 'text-white' : 'text-gray-400'}`}>
                                        <CheckCircle2 size={18} className={plan.featured ? 'text-black' : 'text-red-600'} /> Premium Feature {f}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${
                                plan.featured ? 'bg-black text-white hover:bg-gray-900 border border-white' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                            }`}>
                                SELECT PLAN
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;