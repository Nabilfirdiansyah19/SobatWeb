const express = require('express');
const router = express.Router();

// Sample schedule data
const scheduleData = {
    senin: [
        {
            id: 'S1',
            time: '06:00 - 07:00',
            class: 'Body Pump',
            instructor: 'Sarah Chen',
            type: 'Strength',
            capacity: 20,
            enrolled: 15
        },
        {
            id: 'S2',
            time: '07:30 - 08:30',
            class: 'RPM (Cycling)',
            instructor: 'Mike Johnson',
            type: 'Cardio',
            capacity: 25,
            enrolled: 20
        },
        {
            id: 'S3',
            time: '18:00 - 19:00',
            class: 'Body Combat',
            instructor: 'Alex Rodriguez',
            type: 'HIIT',
            capacity: 20,
            enrolled: 18
        },
        {
            id: 'S4',
            time: '19:30 - 20:30',
            class: 'Yoga Flow',
            instructor: 'Lisa Wang',
            type: 'Flexibility',
            capacity: 15,
            enrolled: 12
        }
    ],
    selasa: [
        {
            id: 'T1',
            time: '06:00 - 07:00',
            class: 'HIIT Training',
            instructor: 'David Kusuma',
            type: 'HIIT',
            capacity: 20,
            enrolled: 16
        },
        {
            id: 'T2',
            time: '07:30 - 08:30',
            class: 'Mat Pilates',
            instructor: 'Sarah Wijaya',
            type: 'Flexibility',
            capacity: 15,
            enrolled: 13
        },
        {
            id: 'T3',
            time: '18:00 - 19:00',
            class: 'Body Pump',
            instructor: 'Ahmad Rifai',
            type: 'Strength',
            capacity: 20,
            enrolled: 17
        },
        {
            id: 'T4',
            time: '19:30 - 20:30',
            class: 'RPM (Cycling)',
            instructor: 'Mike Johnson',
            type: 'Cardio',
            capacity: 25,
            enrolled: 22
        }
    ],
    rabu: [
        {
            id: 'W1',
            time: '06:00 - 07:00',
            class: 'Yoga Flow',
            instructor: 'Lisa Wang',
            type: 'Flexibility',
            capacity: 15,
            enrolled: 11
        },
        {
            id: 'W2',
            time: '07:30 - 08:30',
            class: 'Body Combat',
            instructor: 'Alex Rodriguez',
            type: 'HIIT',
            capacity: 20,
            enrolled: 19
        },
        {
            id: 'W3',
            time: '18:00 - 19:00',
            class: 'RPM (Cycling)',
            instructor: 'Mike Johnson',
            type: 'Cardio',
            capacity: 25,
            enrolled: 21
        },
        {
            id: 'W4',
            time: '19:30 - 20:30',
            class: 'HIIT Training',
            instructor: 'David Kusuma',
            type: 'HIIT',
            capacity: 20,
            enrolled: 18
        }
    ],
    kamis: [
        {
            id: 'TH1',
            time: '06:00 - 07:00',
            class: 'Body Pump',
            instructor: 'Ahmad Rifai',
            type: 'Strength',
            capacity: 20,
            enrolled: 16
        },
        {
            id: 'TH2',
            time: '07:30 - 08:30',
            class: 'Yoga Flow',
            instructor: 'Sarah Wijaya',
            type: 'Flexibility',
            capacity: 15,
            enrolled: 14
        },
        {
            id: 'TH3',
            time: '18:00 - 19:00',
            class: 'Body Combat',
            instructor: 'Alex Rodriguez',
            type: 'HIIT',
            capacity: 20,
            enrolled: 17
        },
        {
            id: 'TH4',
            time: '19:30 - 20:30',
            class: 'Mat Pilates',
            instructor: 'Lisa Wang',
            type: 'Flexibility',
            capacity: 15,
            enrolled: 13
        }
    ],
    jumat: [
        {
            id: 'F1',
            time: '06:00 - 07:00',
            class: 'RPM (Cycling)',
            instructor: 'Mike Johnson',
            type: 'Cardio',
            capacity: 25,
            enrolled: 23
        },
        {
            id: 'F2',
            time: '07:30 - 08:30',
            class: 'HIIT Training',
            instructor: 'David Kusuma',
            type: 'HIIT',
            capacity: 20,
            enrolled: 19
        },
        {
            id: 'F3',
            time: '18:00 - 19:00',
            class: 'Body Pump',
            instructor: 'Sarah Chen',
            type: 'Strength',
            capacity: 20,
            enrolled: 18
        },
        {
            id: 'F4',
            time: '19:30 - 20:30',
            class: 'Yoga Flow',
            instructor: 'Lisa Wang',
            type: 'Flexibility',
            capacity: 15,
            enrolled: 14
        }
    ],
    sabtu: [
        {
            id: 'SA1',
            time: '08:00 - 09:00',
            class: 'Body Combat',
            instructor: 'Alex Rodriguez',
            type: 'HIIT',
            capacity: 20,
            enrolled: 17
        },
        {
            id: 'SA2',
            time: '09:30 - 10:30',
            class: 'Mat Pilates',
            instructor: 'Sarah Wijaya',
            type: 'Flexibility',
            capacity: 15,
            enrolled: 12
        },
        {
            id: 'SA3',
            time: '10:30 - 11:30',
            class: 'RPM (Cycling)',
            instructor: 'Mike Johnson',
            type: 'Cardio',
            capacity: 25,
            enrolled: 20
        },
        {
            id: 'SA4',
            time: '17:00 - 18:00',
            class: 'Yoga Flow',
            instructor: 'Lisa Wang',
            type: 'Flexibility',
            capacity: 15,
            enrolled: 11
        }
    ],
    minggu: [
        {
            id: 'SU1',
            time: '08:00 - 09:00',
            class: 'Yoga Flow',
            instructor: 'Lisa Wang',
            type: 'Flexibility',
            capacity: 15,
            enrolled: 10
        },
        {
            id: 'SU2',
            time: '09:30 - 10:30',
            class: 'Body Pump',
            instructor: 'Ahmad Rifai',
            type: 'Strength',
            capacity: 20,
            enrolled: 15
        },
        {
            id: 'SU3',
            time: '10:30 - 11:30',
            class: 'HIIT Training',
            instructor: 'David Kusuma',
            type: 'HIIT',
            capacity: 20,
            enrolled: 16
        },
        {
            id: 'SU4',
            time: '17:00 - 18:00',
            class: 'RPM (Cycling)',
            instructor: 'Mike Johnson',
            type: 'Cardio',
            capacity: 25,
            enrolled: 18
        }
    ]
};

// GET - All schedule
router.get('/', (req, res) => {
    try {
        res.json({
            success: true,
            data: scheduleData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// GET - Schedule by day
router.get('/:day', (req, res) => {
    try {
        const day = req.params.day.toLowerCase();
        const schedule = scheduleData[day];

        if (!schedule) {
            return res.status(404).json({
                success: false,
                error: 'Schedule for this day not found'
            });
        }

        res.json({
            success: true,
            day: day,
            classes: schedule
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// GET - Get class by ID
router.get('/class/:id', (req, res) => {
    try {
        const classId = req.params.id;
        let foundClass = null;
        let foundDay = null;

        // Search through all days
        for (const [day, classes] of Object.entries(scheduleData)) {
            const classItem = classes.find(c => c.id === classId);
            if (classItem) {
                foundClass = classItem;
                foundDay = day;
                break;
            }
        }

        if (!foundClass) {
            return res.status(404).json({
                success: false,
                error: 'Class not found'
            });
        }

        res.json({
            success: true,
            day: foundDay,
            data: foundClass
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;
