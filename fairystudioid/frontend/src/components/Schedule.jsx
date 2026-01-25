import { motion } from "framer-motion";

const Schedule = () => {
  const scheduleData = {
    Monday: ["09:00 - Aerial Hammock", "17:00 - Vinyasa Yoga", "19:00 - Aerial Hoop"],
    Tuesday: ["10:00 - Hatha Yoga", "18:00 - Aerial Hammock", "20:00 - Yin Yoga"],
    Wednesday: ["09:00 - Aerial Hoop", "17:00 - Power Yoga", "19:00 - Hammock Flow"],
    Thursday: ["10:00 - Pilates Mat", "18:30 - Aerial Hoop", "20:00 - Restorative"],
    Friday: ["08:30 - Gentle Yoga", "17:00 - Aerial Advanced", "19:00 - Yoga Nidra"],
    Saturday: ["09:00 - Kids Aerial", "11:00 - Family Yoga", "13:00 - Open Studio"],
  };

  const days = Object.keys(scheduleData);

  return (
    <section id="classes" className="py-16 md:py-32 bg-white px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-serif italic text-amber-900">Weekly <span className="text-amber-500">Schedule</span></h2>
          <div className="w-20 h-1 bg-amber-200 mx-auto mt-4 rounded-full" />
        </div>
        
        {/* Mobile View: Vertical Stack | Desktop: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {days.map((day, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#FAF7F2] p-8 rounded-[2.5rem] border border-amber-50"
            >
              <h4 className="text-amber-900 font-black text-xl mb-6 border-b border-amber-200 pb-2 uppercase tracking-tighter">
                {day}
              </h4>
              <div className="space-y-4">
                {scheduleData[day].map((cls, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <p className="text-xs md:text-sm font-bold text-amber-800/80 tracking-tight">{cls}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Schedule;