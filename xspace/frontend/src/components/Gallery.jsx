import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Eye, Flame, Shield } from "lucide-react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const categories = ['ALL', 'HORROR', 'ROLEPLAY', 'BEHIND SCENES'];

  const content = [
    { id: 1, cat: 'HORROR', img: 'https://images.unsplash.com/photo-1505630285034-01309d94184c?w=800', title: 'The Basement' },
    { id: 2, cat: 'ROLEPLAY', img: 'https://images.unsplash.com/photo-1519074063912-ad2d6d51dd27?w=800', title: 'Cyber Heist' },
    { id: 3, cat: 'HORROR', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800', title: 'Scream Room' },
    { id: 4, cat: 'ROLEPLAY', img: 'https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?w=800', title: 'Detective Mode' },
  ];

  const filtered = activeTab === 'ALL' ? content : content.filter(item => item.cat === activeTab);

  return (
    <section id="gallery" className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-6xl font-black text-white italic uppercase tracking-tighter">
              INSIDE <span className="text-orange-600">XSPACE.</span>
            </h2>
          </motion.div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-black text-[10px] tracking-widest transition-all ${
                  activeTab === tab ? 'bg-orange-600 text-white' : 'bg-zinc-900 text-zinc-500 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode='popLayout'>
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="group relative h-[450px] rounded-[2rem] overflow-hidden border border-white/5"
              >
                <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-orange-500 font-black text-[10px] tracking-widest mb-2">{item.cat}</p>
                  <h3 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-4">{item.title}</h3>
                  <div className="flex gap-2">
                    <span className="p-2 bg-white/10 rounded-lg text-white"><Eye size={16}/></span>
                    <span className="p-2 bg-white/10 rounded-lg text-white"><Shield size={16}/></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
export default Gallery;