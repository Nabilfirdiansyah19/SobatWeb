import { motion } from "framer-motion";
import { ShieldCheck, Star, Users, MapPin } from "lucide-react";
import { useRef, useEffect } from "react"; // Tambahkan useRef dan useEffect
import "@google/model-viewer";

const About = () => {
  const modelRef = useRef(null); // Ref untuk akses model-viewer

 
  useEffect(() => {
    const modelViewer = modelRef.current;
    
    const applyBlackColor = () => {
      const materials = modelViewer.model.materials;
      materials.forEach((material) => {
        material.pbrMetallicRoughness.setBaseColorFactor([0.05, 0.05, 0.05, 1]);
        material.pbrMetallicRoughness.setRoughnessFactor(0.7);
        material.pbrMetallicRoughness.setMetallicFactor(0.1);
      });
    };

    modelViewer.addEventListener("load", applyBlackColor);
    return () => modelViewer.removeEventListener("load", applyBlackColor);
  }, []);

  const perks = [
    { icon: ShieldCheck, label: "Izin Resmi", desc: "Lembaga kursus terpercaya dan berizin." },
    { icon: Star, label: "Instruktur Pro", desc: "Sabar, humble, dan berpengalaman." },
    { icon: Users, label: "Ribuan Alumni", desc: "Telah membantu ribuan siswa mahir." },
    { icon: MapPin, label: "Area Luas", desc: "Melayani Tangerang & sekitarnya." },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-1 relative"
        >
          <div className="relative  overflow-hidden h-100 md:h-137.5">
            <model-viewer
              ref={modelRef} 
              src="/tesla_steering_wheel.glb" 
              alt="3D Steering Wheel GhiazDrive"
              auto-rotate
              camera-controls
              interaction-prompt="none"
              shadow-intensity="1"
              disable-zoom={true}       
              touch-action="pan-y"      
              style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
              exposure="1" 
              camera-orbit="0deg 75deg 105%"
            >
              <div slot="poster" className="absolute inset-0 flex items-center justify-center bg-slate-100">
                 <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </model-viewer>
          </div>
        </motion.div>

        <div className="order-2 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8 tracking-tighter text-slate-900">
              BELAJAR NYETIR <br /> <span className="text-red-600">TANPA PANIK.</span>
            </h2>
            <p className="text-slate-500 font-medium mb-10 text-sm md:text-base">
              GhiazDrive memberikan pengalaman belajar menyetir yang aman dan nyaman dengan instruktur yang berpengalaman di bidangnya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {perks.map((p, i) => (
              <div key={i} className="p-6 bg-white rounded-4xl shadow-sm border border-slate-100 flex flex-col items-center md:items-start text-center md:text-left group transition-all">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <p.icon size={24} />
                </div>
                <h4 className="font-black uppercase italic text-sm mb-1">{p.label}</h4>
                <p className="text-[11px] text-slate-500 font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;