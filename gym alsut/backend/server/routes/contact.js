const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '../database/db.json');

// Helper function to read database
function readDB() {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
}

// Helper function to write to database
function writeDB(data) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// POST - Submit contact form
router.post('/', (req, res) => {
    try {
        const { name, email, phone, interest, message } = req.body;

        // Validation
        if (!name || !email || !phone) {
            return res.status(400).json({
                success: false,
                error: 'Please provide name, email, and phone'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                error: 'Please provide a valid email address'
            });
        }

        const db = readDB();

        // Create new contact submission
        const newContact = {
            id: `CONTACT${Date.now()}`,
            name,
            email,
            phone,
            interest: interest || 'Not specified',
            message: message || '',
            status: 'new',
            submittedAt: new Date().toISOString()
        };

        db.contacts.push(newContact);
        writeDB(db);

        // In a real application, you would send an email notification here
        console.log('📧 New contact form submission:', {
            name,
            email,
            interest
        });

        res.status(201).json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you soon.',
            data: newContact
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// GET - Retrieve all contact submissions (for admin)
router.get('/', (req, res) => {
    try {
        const db = readDB();

        res.json({
            success: true,
            count: db.contacts.length,
            data: db.contacts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// GET - Get single contact by ID
router.get('/:id', (req, res) => {
    try {
        const db = readDB();
        const contact = db.contacts.find(c => c.id === req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                error: 'Contact submission not found'
            });
        }

        res.json({
            success: true,
            data: contact
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// PUT - Update contact status
router.put('/:id', (req, res) => {
    try {
        const db = readDB();
        const contactIndex = db.contacts.findIndex(c => c.id === req.params.id);

        if (contactIndex === -1) {
            return res.status(404).json({
                success: false,
                error: 'Contact submission not found'
            });
        }

        db.contacts[contactIndex] = {
            ...db.contacts[contactIndex],
            status: req.body.status || db.contacts[contactIndex].status,
            updatedAt: new Date().toISOString()
        };

        writeDB(db);

        res.json({
            success: true,
            message: 'Contact status updated',
            data: db.contacts[contactIndex]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// DELETE - Remove contact submission
router.delete('/:id', (req, res) => {
    try {
        const db = readDB();
        const contactIndex = db.contacts.findIndex(c => c.id === req.params.id);

        if (contactIndex === -1) {
            return res.status(404).json({
                success: false,
                error: 'Contact submission not found'
            });
        }

        const deletedContact = db.contacts.splice(contactIndex, 1)[0];
        writeDB(db);

        res.json({
            success: true,
            message: 'Contact submission deleted',
            data: deletedContact
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;
