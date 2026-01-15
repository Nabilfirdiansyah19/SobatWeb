import { motion } from 'framer-motion';
import { Skull, MapPin, Users, Volume2, Eye, ShieldAlert } from 'lucide-react';

const Services = () => {
  const experiences = [
    { icon: Skull, title: 'Haunted House', desc: 'Horor psikologis dengan aktor profesional dan set kelas film.' },
    { icon: Eye, title: 'Story Roleplay', desc: 'Jadilah karakter utama dalam alur cerita misteri yang kamu tentukan.' },
    { icon: Volume2, title: 'Immersive Audio', desc: 'Teknologi suara surround yang membuat bulu kuduk berdiri.' },
    { icon: Users, title: 'Squad Mode', desc: 'Bawa tim-mu (hingga 6 orang) untuk memecahkan misteri bersama.' },
    { icon: ShieldAlert, title: 'High Safety', desc: 'Protokol keamanan ketat dengan tim standby di setiap ruangan.' },
    { icon: MapPin, title: '3 Big Arenas', desc: 'Tersedia di PIK 2, Blok M, dan Hampton Square.' }
  ];

  return (
    <section id="facilities" className="py-32 bg-[#050505] text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-24">
          <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-4">
            CHOOSE YOUR <span className="text-orange-600">FEAR.</span>
          </h2>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.4em]">Fasilitas Hiburan Kelas Dunia</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10, borderColor: '#FF5F00' }}
              className="p-12 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 transition-all group"
            >
              <div className="w-20 h-20 bg-orange-600/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-orange-600 transition-colors">
                <exp.icon size={40} className="text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-black uppercase italic mb-6 tracking-tighter">{exp.title}</h3>
              <p className="text-zinc-500 font-medium leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;