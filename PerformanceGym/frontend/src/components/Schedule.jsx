import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState('senin');
    
    const scheduleData = {
        senin: [
            { time: '06:00 - 07:00', class: 'Body Pump', instructor: 'Sarah Chen', type: 'Strength' },
            { time: '07:30 - 08:30', class: 'RPM (Cycling)', instructor: 'Mike Johnson', type: 'Cardio' },
            { time: '18:00 - 19:00', class: 'Body Combat', instructor: 'Alex Rodriguez', type: 'HIIT' },
            { time: '19:30 - 20:30', class: 'Yoga Flow', instructor: 'Lisa Wang', type: 'Flexibility' }
        ],
        selasa: [
            { time: '06:00 - 07:00', class: 'HIIT Training', instructor: 'David Kusuma', type: 'HIIT' },
            { time: '07:30 - 08:30', class: 'Mat Pilates', instructor: 'Sarah Wijaya', type: 'Flexibility' },
            { time: '18:00 - 19:00', class: 'Body Pump', instructor: 'Ahmad Rifai', type: 'Strength' },
            { time: '19:30 - 20:30', class: 'RPM (Cycling)', instructor: 'Mike Johnson', type: 'Cardio' }
        ],
        rabu: [
            { time: '06:00 - 07:00', class: 'Yoga Flow', instructor: 'Lisa Wang', type: 'Flexibility' },
            { time: '07:30 - 08:30', class: 'Body Combat', instructor: 'Alex Rodriguez', type: 'HIIT' },
            { time: '18:00 - 19:00', class: 'RPM (Cycling)', instructor: 'Mike Johnson', type: 'Cardio' },
            { time: '19:30 - 20:30', class: 'HIIT Training', instructor: 'David Kusuma', type: 'HIIT' }
        ],
        kamis: [
            { time: '06:00 - 07:00', class: 'Body Pump', instructor: 'Ahmad Rifai', type: 'Strength' },
            { time: '07:30 - 08:30', class: 'Yoga Flow', instructor: 'Sarah Wijaya', type: 'Flexibility' },
            { time: '18:00 - 19:00', class: 'Body Combat', instructor: 'Alex Rodriguez', type: 'HIIT' },
            { time: '19:30 - 20:30', class: 'Mat Pilates', instructor: 'Lisa Wang', type: 'Flexibility' }
        ],
        jumat: [
            { time: '06:00 - 07:00', class: 'RPM (Cycling)', instructor: 'Mike Johnson', type: 'Cardio' },
            { time: '07:30 - 08:30', class: 'HIIT Training', instructor: 'David Kusuma', type: 'HIIT' },
            { time: '18:00 - 19:00', class: 'Body Pump', instructor: 'Sarah Chen', type: 'Strength' },
            { time: '19:30 - 20:30', class: 'Yoga Flow', instructor: 'Lisa Wang', type: 'Flexibility' }
        ],
        sabtu: [
            { time: '08:00 - 09:00', class: 'Body Combat', instructor: 'Alex Rodriguez', type: 'HIIT' },
            { time: '09:30 - 10:30', class: 'Mat Pilates', instructor: 'Sarah Wijaya', type: 'Flexibility' },
            { time: '10:30 - 11:30', class: 'RPM (Cycling)', instructor: 'Mike Johnson', type: 'Cardio' },
            { time: '17:00 - 18:00', class: 'Yoga Flow', instructor: 'Lisa Wang', type: 'Flexibility' }
        ],
        minggu: [
            { time: '08:00 - 09:00', class: 'Yoga Flow', instructor: 'Lisa Wang', type: 'Flexibility' },
            { time: '09:30 - 10:30', class: 'Body Pump', instructor: 'Ahmad Rifai', type: 'Strength' },
            { time: '10:30 - 11:30', class: 'HIIT Training', instructor: 'David Kusuma', type: 'HIIT' },
            { time: '17:00 - 18:00', class: 'RPM (Cycling)', instructor: 'Mike Johnson', type: 'Cardio' }
        ]
    };

    const days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];

   return (
        <section className="py-32 bg-[#000000]" id="schedule">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white mb-10">WAR <span className="text-red-600">PLAN</span></h2>
                    
                    <div className="flex flex-wrap justify-center gap-2">
                        {days.map(day => (
                            <button
                                key={day}
                                onClick={() => setSelectedDay(day)}
                                className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                                    selectedDay === day 
                                    ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]' 
                                    : 'bg-[#0a0a0a] text-gray-500 border border-white/5 hover:border-red-600/30'
                                }`}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={selectedDay}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                        >
                            {(scheduleData[selectedDay] || []).map((item, idx) => (
                                <div key={idx} className="group flex flex-col md:flex-row items-center justify-between p-8 bg-[#0a0a0a] border border-white/5 rounded-[30px] hover:border-red-600/30 transition-all">
                                    <div className="flex items-center gap-6 mb-4 md:mb-0">
                                        <div className="text-3xl font-black italic text-red-600">{item.time}</div>
                                        <div className="h-10 w-[2px] bg-white/10"></div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-white uppercase italic leading-none">{item.class}</h4>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mt-2 tracking-widest">COACH {item.coach}</p>
                                        </div>
                                    </div>
                                    <div className="px-6 py-2 rounded-full border border-white/10 text-gray-400 text-[10px] font-black uppercase group-hover:border-red-600 group-hover:text-red-600 transition-all">
                                        {item.type}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Schedule;