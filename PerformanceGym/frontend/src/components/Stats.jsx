import { motion } from 'framer-motion';
import { Dumbbell, Maximize, Users, Award } from 'lucide-react';

const Stats = () => {
    const statsData = [
        { icon: <Dumbbell />, count: "150+", label: "Elite Gear" },
        { icon: <Maximize />, count: "3000", label: "M² Arena" },
        { icon: <Users />, count: "5K+", label: "Members" },
        { icon: <Award />, count: "50+", label: "Pro Coach" },
    ];

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {statsData.map((stat, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -5, borderColor: 'rgba(220,38,38,0.5)' }}
                            className="p-8 md:p-12 bg-[#0a0a0a] border border-white/5 rounded-[40px] text-center transition-all group"
                        >
                            <div className="text-red-600 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-6xl font-black italic text-white mb-2 tracking-tighter">
                                {stat.count}
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-red-600 transition-colors">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;