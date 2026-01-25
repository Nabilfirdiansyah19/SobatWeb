import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1599901860904-17e6ed201b27?w=800", cat: "Hammock" },
    { id: 2, url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800", cat: "Hoop" },
    { id: 3, url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800", cat: "Yoga" },
    { id: 4, url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800", cat: "Pilates" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-32 bg-[#FAF7F2]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif italic text-amber-900 text-center mb-12">Studio <span className="text-amber-500">Gallery</span></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-lg"
            >
              <img src={item.url} alt={item.cat} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent flex items-end p-8">
                <span className="text-white font-serif italic text-xl">{item.cat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;