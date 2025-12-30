import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "https://assets-a1.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png",
    "https://assets-a1.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png",
    "https://assets-a1.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png",
    "https://assets-a1.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png",
  ];

  return (
    <section id="gallery" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-black uppercase italic tracking-tighter text-white">
            OUR HAPPY <span className="text-red-600">STUDENTS.</span>
          </h2>
          <p className="text-white/40 font-black uppercase tracking-[0.5em] text-[10px] mt-4 italic">
            Dokumentasi Kelulusan Siswa Ghiaz
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15 }} // Hanya naik sedikit saat di-hover
              className="aspect-3/4 rounded-[2.5rem] overflow-hidden border-2 border-white/5 group relative bg-slate-900"
            >
              {/* Foto: Awalnya agak gelap & hitam-putih, saat hover jadi terang & berwarna */}
              <motion.img 
                src={img} 
                alt="Siswa Lulus"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" 
              />
              
              {/* Overlay gradasi tipis di bawah agar foto tidak terlihat flat */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-100" />
              
              {/* Label Nama Siswa (Opsional) */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-white font-black italic uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  #LulusanGhiaz
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