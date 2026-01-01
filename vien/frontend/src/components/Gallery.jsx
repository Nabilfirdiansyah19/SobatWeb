import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Layout, Info, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    title: "Grand Living Room", 
    type: "completed", 
    location: "Dharmawangsa, Jakarta",
    description: "Desain ruang tamu megah dengan perpaduan marmer Statuario Italia dan aksen kayu walnut premium. Memaksimalkan void tinggi untuk sirkulasi udara alami.",
    catalog: ["Statuario Marble Flooring", "Double-Height Walnut Paneling", "Custom Chandelier 24K Gold Finish"],
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
      "https://images.unsplash.com/photo-1616486341353-c58339670257?w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800"
    ]
  },
  { 
    id: 2, 
    title: "Emerald Gourmet Kitchen", 
    type: "completed", 
    location: "Menteng, Jakarta",
    description: "Konsep dapur bersih dengan sentuhan warna emerald dan brass. Menggunakan teknologi cabinet 'handleless' dan peralatan built-in kelas profesional.",
    catalog: ["Emerald Quartz Countertop", "Miele Professional Appliances", "Brass Profile Detailing"],
    images: [
      "https://images.unsplash.com/photo-1556912177-f547c12dd0ee?w=800",
      "https://images.unsplash.com/photo-1556911223-e1f0203091f0?w=800",
      "https://images.unsplash.com/photo-1556186676-35071191398c?w=800"
    ]
  },
  { 
    id: 3, 
    title: "Zen Master Suite", 
    type: "completed", 
    location: "BSD City, Tangerang",
    description: "Kamar tidur utama bertema resor minimalis. Menggunakan palet warna earth-tone untuk menciptakan suasana tenang nan eksklusif.",
    catalog: ["Natural Oak Flooring", "Hidden Wardrobe System", "Ambient Cove Lighting"],
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800"
    ]
  },
  { 
    id: 4, 
    title: "Royal Dining Hall", 
    type: "on-progress", 
    location: "Pondok Indah, Jakarta",
    description: "Ruang makan formal berkapasitas 12 orang dengan detail ceiling yang rumit dan pencahayaan dramatis.",
    catalog: ["Victorian Plaster Ceiling", "Smoked Oak Dining Table", "Silk Wallcovering"],
    images: [
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=800",
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=800",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800"
    ]
  },
  { 
    id: 5, 
    title: "Sky Penthouse Lounge", 
    type: "completed", 
    location: "SCBD, Jakarta",
    description: "Lounge modern di lantai 45 dengan pemandangan kota 360 derajat. Menekankan pada furniture ikonik dan tekstur velvet.",
    catalog: ["Full Height Glass Wall", "Minotti Sofa Collection", "Smart Glass Partition"],
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800"
    ]
  },
  { 
    id: 6, 
    title: "Private Library v.2", 
    type: "on-progress", 
    location: "Kemang, Jakarta",
    description: "Perpustakaan pribadi dengan sistem penyimpanan pintar dan area baca semi-outdoor.",
    catalog: ["Floor-to-Ceiling Shelving", "Hidden Reading Nook", "UV Protection Glass"],
    images: [
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800"
    ]
  }
];
const Gallery = () => {
  const [activeTab, setActiveTab] = useState('completed');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const scrollRef = useRef(null);

  const filteredProjects = projects.filter(p => p.type === activeTab);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const move = scrollRef.current.clientWidth * 0.8; 
      scrollRef.current.scrollBy({ left: direction === 'left' ? -move : move, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 px-4 md:px-6 relative bg-[#FDFBF7]">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2 text-[#D4AF37]">
              <Sparkles size={14} />
              <span className="font-bold tracking-[0.3em] uppercase text-[9px]">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif text-[#1A1A1A]">Selected <span className="italic text-[#D4AF37]">Works.</span></h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
             {/* Filter Tabs */}
             <div className="flex bg-white p-1 rounded-xl border border-slate-100 shadow-sm w-full sm:w-auto">
                {['completed', 'on-progress'].map((t) => (
                  <button key={t} onClick={() => setActiveTab(t)} className={`flex-1 sm:flex-none px-4 md:px-6 py-2.5 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all ${activeTab === t ? 'bg-[#1A1A1A] text-white' : 'text-slate-400'}`}>
                    {t.replace('-', ' ')}
                  </button>
                ))}
             </div>
             
             {/* Desktop Navigation (Hidden on Mobile) */}
             <div className="hidden md:flex gap-2">
                <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all"><ChevronLeft size={20} /></button>
                <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all"><ChevronRight size={20} /></button>
             </div>
          </div>
        </div>

        {/* Main Slider Area */}
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-8 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-[32vw] max-w-[85vw] sm:max-w-[45vw] lg:max-w-[32vw] snap-center"
            >
              <div 
                onClick={() => { setSelectedProject(project); setCurrentImgIdx(0); }}
                className="relative aspect-[3/4] md:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-200 shadow-xl group cursor-pointer"
              >
                <img src={project.images[0]} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all p-6 md:p-10 flex flex-col justify-end">
                  <span className="text-[#D4AF37] text-[9px] font-bold tracking-widest mb-1 uppercase">{project.location}</span>
                  <h3 className="text-white font-serif text-2xl md:text-4xl mb-4 leading-tight">{project.title}</h3>
                  <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">
                    View Project <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="min-w-[5vw]" />
        </div>

        {/* Mobile Navigation (Visible only on Mobile) */}
        <div className="flex md:hidden justify-center items-center gap-8 mt-4">
          <button 
            onClick={() => scroll('left')} 
            className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center bg-white active:scale-90 transition-transform shadow-md"
          >
            <ChevronLeft size={24} className="text-[#1A1A1A]" />
          </button>
        

          <button 
            onClick={() => scroll('right')} 
            className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center bg-white active:scale-90 transition-transform shadow-md"
          >
            <ChevronRight size={24} className="text-[#1A1A1A]" />
          </button>
        </div>

        {/* Modal Detail (Tetap sama) */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[99999] flex items-end md:items-center justify-center">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/90 backdrop-blur-md" />
              
              <motion.div 
                initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-6xl bg-white rounded-t-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row h-[92vh] md:h-auto md:max-h-[85vh]"
              >
                {/* Modal Content Gallery */}
                <div className="w-full md:w-[55%] h-[45%] md:h-auto relative bg-black shrink-0">
                  <motion.img 
                    key={currentImgIdx}
                    src={selectedProject.images[currentImgIdx]} 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="w-full h-full object-cover" 
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                    <button onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(prev => (prev - 1 + 3) % 3); }} className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center pointer-events-auto active:bg-[#D4AF37]"><ChevronLeft size={20} /></button>
                    <button onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(prev => (prev + 1) % 3); }} className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center pointer-events-auto active:bg-[#D4AF37]"><ChevronRight size={20} /></button>
                  </div>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, i) => (
                      <div key={i} className={`h-1 rounded-full transition-all ${currentImgIdx === i ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-white/40'}`} />
                    ))}
                  </div>
                </div>

                {/* Modal Text Content */}
                <div className="flex-1 p-6 md:p-12 overflow-y-auto bg-white">
                  <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-6 p-2 text-slate-400"><X size={24} /></button>
                  <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">Catalog Selection</span>
                  <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">{selectedProject.title}</h2>
                  <div className="space-y-6 pb-10">
                    <div>
                      <h4 className="text-[10px] font-black uppercase text-slate-400 mb-2 font-sans">The Concept</h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-light">{selectedProject.description}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase text-slate-400 mb-4 font-sans">Specifications</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedProject.catalog.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 transition-colors active:border-[#D4AF37]">
                            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                            <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wide">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;