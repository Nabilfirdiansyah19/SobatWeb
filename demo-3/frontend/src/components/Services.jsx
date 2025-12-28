import { motion } from 'framer-motion';
import { Shirt, Scissors, Truck, Heart, Check, ShoppingBag } from 'lucide-react';

const Services = () => {
  // Variasi untuk animasi kontainer (stagger children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const features = [
    { icon: Shirt, title: 'Premium Material', desc: 'Menggunakan bahan Cotton Combed 24s kualitas ekspor.' },
    { icon: Scissors, title: 'Perfect Stitch', desc: 'Jahitan rantai standar distro yang kuat dan rapi.' },
    { icon: Truck, title: 'Fast Shipping', desc: 'Pengiriman aman ke seluruh Indonesia dengan proteksi.' }
  ];

  const collections = [
    { name: "Basic Pack", price: "149", features: ["1 pcs Plain Tee", "Premium Box", "Sticker Pack"], popular: false },
    { name: "Bundle Mix", price: "399", features: ["3 pcs Any Items", "Exclusive Box", "Free Totebag", "Priority Shipping"], popular: true },
    { name: "Custom Batch", price: "999", features: ["Min. 12 pcs", "Free Design Consult", "Custom Label", "Sample Proofing"], popular: false }
  ];

  return (
    <section id="services" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100/40 blur-[100px] rounded-full z-0" />
      
      <div className="container mx-auto px-6 text-center mb-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black uppercase italic text-slate-900 tracking-tighter"
        >
          Why Choose <span className="text-indigo-600">Our Apparel</span>
        </motion.h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-10 container mx-auto px-6 relative z-10 mb-32"
      >
        {features.map((item, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
            className="group bg-white/40 backdrop-blur-xl rounded-[3rem] p-10 border border-white/80 shadow-xl"
          >
            <div className="w-16 h-16 mb-8 rounded-2xl flex items-center justify-center bg-indigo-600 text-white shadow-lg shadow-indigo-200 group-hover:rotate-12 transition-transform duration-500">
              <item.icon size={30} />
            </div>
            <h3 className="text-2xl font-black mb-4 text-slate-900 uppercase italic tracking-tighter">{item.title}</h3>
            <p className="text-slate-500 font-medium">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <div id="pricing" className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">Special <span className="text-indigo-600">Bundles</span></h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {collections.map((tier, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              className={`relative p-12 rounded-[3.5rem] border backdrop-blur-3xl transition-all duration-500
                ${tier.popular ? 'bg-slate-900 text-white border-slate-700 shadow-2xl scale-105 z-20' : 'bg-white/40 border-white text-slate-900 shadow-xl'}`}
            >
              <div style={{ transform: "translateZ(50px)" }}>
                {tier.popular && <span className="absolute -top-6 right-0 bg-indigo-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">Best Value</span>}
                <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-70">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-xs font-bold mr-1">IDR</span>
                  <span className="text-5xl font-black italic tracking-tighter">{tier.price}K</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-center gap-3 font-bold italic text-sm">
                      <Check size={18} className="text-indigo-500" /> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-all duration-300
                  ${tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'}`}>
                  <ShoppingBag size={14} /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;