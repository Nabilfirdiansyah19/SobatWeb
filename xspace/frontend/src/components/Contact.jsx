import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const Contact = () => {
  const branches = [
    { name: "BLOK M (ROW 9)", type: "Roleplay Arena" },
    { name: "PIK 2 (IDD)", type: "Immersive Theater" },
    { name: "HAMPTON SQUARE", type: "Haunted House" }
  ];

  return (
    <section id="locations" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter mb-16 text-center">
          VISIT THE <span className="text-orange-600">ARENAS.</span>
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {branches.map((b, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-zinc-900 border border-white/5 flex justify-between items-center group hover:border-orange-600 transition-all">
              <div>
                <p className="text-orange-600 font-black text-[10px] tracking-widest uppercase mb-1">{b.type}</p>
                <h4 className="text-white font-black uppercase italic">{b.name}</h4>
              </div>
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-white group-hover:bg-orange-600 transition-all">
                <Navigation size={20} />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-[500px] rounded-[3rem] overflow-hidden border border-white/10 grayscale invert opacity-80">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.123!2d106.789!3d-6.234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMDQuOCJTIDEwNsKwNDcnMTguNCJF!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Contact;