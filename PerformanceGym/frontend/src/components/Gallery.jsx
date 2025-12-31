import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571902901105-d8c85333823e?q=80&w=1374&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1469&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574673139082-c3b8d4aaae2c?q=80&w=1631&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
    ];

    return (
        <section className="py-24 bg-black overflow-hidden" id="gallery">
            <div className="container mx-auto px-6">
                {/* Header Section - Centered on Mobile */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
                    <div className="w-full md:w-auto">
                        <h2 className="text-red-600 font-black italic tracking-widest uppercase text-xs md:text-sm mb-4">
                            Inside the Arena
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-black italic uppercase text-white leading-none">
                            THE <span className="text-red-600">FACILITY</span>
                        </h3>
                    </div>
                    <p className="text-gray-500 max-w-xs font-medium text-sm md:text-base">
                        Ruang latihan premium dengan standar internasional dan atmosfer yang membakar semangat.
                    </p>
                </div>

                {/* Grid Layout - Masonry style */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative group overflow-hidden rounded-[30px] md:rounded-[40px] border border-white/5 bg-[#0a0a0a]"
                        >
                            {/* Red Glow Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                            
                            <motion.img 
                                src={src} 
                                alt="Gym Facility" 
                                className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 object-cover min-h-[250px]"
                            />
                            
                            {/* Mobile Info Overlay (Visible on Hover) */}
                            <div className="absolute bottom-6 left-6 z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
                                    Premium Equipment
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;