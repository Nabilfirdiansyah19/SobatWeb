import { motion } from "framer-motion";
import { Shirt, Award, Truck, ShieldCheck } from "lucide-react";

const About = () => {
  const perks = [
    { icon: Shirt, label: "Premium Fabric", desc: "Cotton Combed 24s." },
    { icon: ShieldCheck, label: "Quality Control", desc: "3 tahap QC." },
    { icon: Award, label: "Authentic Design", desc: "Original lokal." },
    { icon: Truck, label: "Eco Shipping", desc: "Ramah lingkungan." },
  ];

  return (
    <section id="about" className="py-32 bg-[#F0F2F5]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
        />

        <div>
          <h2 className="text-5xl font-black uppercase italic mb-8">
            Defining <span className="text-indigo-600">The Standard.</span>
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="p-6 bg-white rounded-3xl shadow"
              >
                <p.icon className="text-indigo-600 mb-3" />
                <h4 className="font-black">{p.label}</h4>
                <p className="text-xs text-slate-500">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
