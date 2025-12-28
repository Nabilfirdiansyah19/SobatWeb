import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'T-Shirt', 'Hoodie', 'Accessories'];
  const projects = [
    { id: 1, title: "Essential Tee", category: "T-Shirt", price: "149k", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800" },
    { id: 2, title: "Cyber Hoodie", category: "Hoodie", price: "399k", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800" },
    { id: 3, title: "Urban Totebag", category: "Accessories", price: "89k", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800" },
    { id: 4, title: "Signature Cap", category: "Accessories", price: "125k", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800" },
  ];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  // Animasi untuk list container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // Animasi untuk masing-masing card
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      transition: { duration: 0.2 } 
    }
  };

  return (
    <section id="gallery" className="py-32 bg-[#F8F9FB]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900">
              Curated <span className="text-indigo-600">Drop.</span>
            </h2>
          </motion.div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-300 border relative
                ${filter === cat ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-400'}`}
              >
                {cat}
                {/* Indikator aktif yang smooth */}
                {filter === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-indigo-600 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id} // Sangat penting: gunakan ID unik, bukan index
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -10 }}
                className="group relative aspect-3/4 rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 shadow-sm"
              >
                <img 
                  src={p.img} 
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-indigo-400 text-[10px] font-black uppercase tracking-widest">{p.category}</span>
                    <h3 className="text-white text-2xl font-black italic uppercase tracking-tighter">{p.title}</h3>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-white font-bold text-lg italic">{p.price}</span>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-indigo-600 hover:text-white transition-colors">
                        <ShoppingBag size={18} />
                      </button>
                    </div>
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