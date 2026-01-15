import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const prices = [
    { title: "Trial Group Class", price: "99k", oldPrice: "139k", desc: "Single Session for New Member" },
    { title: "3x Group Class", price: "289k", oldPrice: "399k", desc: "Valid for 3 weeks", perSession: "96k/sess" },
    { title: "6x Group Class", price: "559k", oldPrice: "769k", desc: "Valid for 5 weeks", perSession: "93k/sess" },
    { title: "10+1 Group Class", price: "999k", oldPrice: "1.390k", desc: "Valid for 10 weeks", perSession: "90k/sess" },
    { title: "20+2 Group Class", price: "1.969k", oldPrice: "2.750k", desc: "Valid for 20 weeks", perSession: "89k/sess" },
  ];

  const schedule = [
    { time: "07:00", mon: "Reformer Foundation", tue: "Tower Sculpt", wed: "Reformer Flow", thu: "Core Focus", fri: "Reformer Foundation" },
    { time: "08:30", mon: "Tower Sculpt", tue: "Reformer Flow", wed: "Tower Sculpt", thu: "Reformer Flow", fri: "Tower Sculpt" },
    { time: "10:00", mon: "Reformer Flow", tue: "Core Focus", wed: "Reformer Foundation", thu: "Tower Sculpt", fri: "Reformer Flow" },
    { time: "16:00", mon: "Core Focus", tue: "Reformer Foundation", wed: "Reformer Flow", thu: "Reformer Foundation", fri: "Core Focus" },
    { time: "17:30", mon: "Reformer Foundation", tue: "Reformer Flow", wed: "Tower Sculpt", thu: "Core Focus", fri: "Reformer Foundation" },
    { time: "19:00", mon: "Tower Sculpt", tue: "Core Focus", wed: "Reformer Foundation", thu: "Reformer Flow", fri: "Tower Sculpt" },
  ];

  return (
    <section className="py-24 bg-[#FDFCFB]">
      <div className="container mx-auto px-6">
        {/* PRICELIST SECTION */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-[#5D4037] mb-4">Investment for Your Body</h2>
          <div className="w-20 h-[1px] bg-[#8D6E63] mx-auto opacity-30" />
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-32">
          {prices.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[2.5rem] border transition-all ${i === 0 ? 'bg-[#5D4037] text-white' : 'bg-white border-[#8D6E63]/10 text-[#5D4037]'}`}
            >
              <h4 className="text-[10px] uppercase tracking-[0.2em] mb-4 font-bold opacity-70">{p.title}</h4>
              <div className="mb-4">
                <span className="text-[10px] line-through opacity-50 mr-2">from {p.oldPrice}</span>
                <p className="text-3xl font-serif italic">{p.price}</p>
              </div>
              <p className="text-[10px] mb-6 font-medium leading-relaxed opacity-80">{p.desc}</p>
              {p.perSession && <div className="text-[9px] bg-[#8D6E63]/10 p-2 rounded-lg text-center font-bold uppercase tracking-widest">{p.perSession}</div>}
            </motion.div>
          ))}
        </div>

        {/* SCHEDULE SECTION */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-[#8D6E63]/10">
          <div className="flex items-center gap-3 mb-10">
            <Calendar className="text-[#8D6E63]" />
            <h3 className="text-2xl font-serif text-[#5D4037]">Weekly Class Schedule</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#8D6E63]/10 text-[10px] uppercase tracking-widest text-[#8D6E63]">
                  <th className="py-4 px-2">Time</th>
                  <th className="py-4 px-2">Mon</th>
                  <th className="py-4 px-2">Tue</th>
                  <th className="py-4 px-2">Wed</th>
                  <th className="py-4 px-2">Thu</th>
                  <th className="py-4 px-2">Fri</th>
                </tr>
              </thead>
              <tbody className="text-xs text-[#5D4037] font-medium">
                {schedule.map((row, i) => (
                  <tr key={i} className="border-b border-[#8D6E63]/5 hover:bg-[#FDFCFB] transition-colors">
                    <td className="py-6 px-2 font-bold text-[#8D6E63]">{row.time}</td>
                    <td className="py-6 px-2">{row.mon}</td>
                    <td className="py-6 px-2">{row.tue}</td>
                    <td className="py-6 px-2">{row.wed}</td>
                    <td className="py-6 px-2">{row.thu}</td>
                    <td className="py-6 px-2">{row.fri}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-[10px] text-[#8D6E63]/60 italic italic text-center">
            * Jadwal dapat berubah sewaktu-waktu. Mohon konfirmasi via WhatsApp untuk booking slot.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;