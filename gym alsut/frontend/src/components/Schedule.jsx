import { useState } from 'react';

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
        <section className="schedule" id="schedule">
            <div className="container">
                <div className="section-header" data-animate="fadeUp">
                    <h2 className="section-title">Jadwal Kelas Grup</h2>
                    <p className="section-subtitle">Pilih kelas yang sesuai dengan jadwal Anda</p>
                </div>
                <div className="schedule-tabs">
                    {days.map(day => (
                        <button
                            key={day}
                            className={`tab-btn ${selectedDay === day ? 'active' : ''}`}
                            onClick={() => setSelectedDay(day)}
                        >
                            {day.charAt(0).toUpperCase() + day.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="schedule-content" id="scheduleContent">
                    <div className="schedule-grid">
                        {scheduleData[selectedDay].map((item, index) => (
                            <div className="schedule-item" key={index}>
                                <div className="schedule-time">{item.time}</div>
                                <div className="schedule-class">
                                    <h4>{item.class}</h4>
                                    <p className="instructor">Instructor: {item.instructor}</p>
                                    <span className="class-type">{item.type}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
