const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// Import routes
const membersRoutes = require('./routes/members');
const contactRoutes = require('./routes/contact');
const scheduleRoutes = require('./routes/schedule');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use('/api/members', membersRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/schedule', scheduleRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'IronClad Fitness API is running',
        timestamp: new Date().toISOString()
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: err.message
    });
});

// Initialize database file if it doesn't exist
const databasePath = path.join(__dirname, 'database', 'db.json');
if (!fs.existsSync(path.dirname(databasePath))) {
    fs.mkdirSync(path.dirname(databasePath), { recursive: true });
}

if (!fs.existsSync(databasePath)) {
    const initialData = {
        members: [],
        contacts: [],
        schedule: []
    };
    fs.writeFileSync(databasePath, JSON.stringify(initialData, null, 2));
    console.log('📁 Database initialized');
}

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════╗
║   🏋️  IronClad Fitness Server Running    ║
║                                            ║
║   Port: ${PORT}                              ║
║   URL: http://localhost:${PORT}             ║
║   API: http://localhost:${PORT}/api        ║
║                                            ║
║   Status: ✅ Ready to serve                ║
╚════════════════════════════════════════════╝
    `);
});

module.exports = app;
