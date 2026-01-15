import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const Gallery = () => {
  const images = [
    { id: 1, img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800', title: 'Reformer Area' },
    { id: 2, img: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800', title: 'Private Session' },
    { id: 3, img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800', title: 'Zen Corner' },
    { id: 4, img: 'https://images.unsplash.com/photo-1518611012118-296072bb5fe7?w=800', title: 'Mat Class' },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#FDFCFB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#5D4037] mb-4">Inside the Studio</h2>
          <p className="text-[#8D6E63] uppercase tracking-[0.3em] text-xs font-bold italic">@everlates moments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-md"
            >
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D4037]/80 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-lg font-serif italic">{item.title}</p>
                <a href="https://instagram.com/everlates" className="text-white/70 text-xs flex items-center gap-2 mt-2">
                  <Instagram size={14} /> View on IG
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;