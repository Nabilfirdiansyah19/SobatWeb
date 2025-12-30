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

// GET all members
router.get('/', (req, res) => {
    try {
        const db = readDB();
        res.json({
            success: true,
            count: db.members.length,
            data: db.members
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// GET single member by ID
router.get('/:id', (req, res) => {
    try {
        const db = readDB();
        const member = db.members.find(m => m.id === req.params.id);

        if (!member) {
            return res.status(404).json({
                success: false,
                error: 'Member not found'
            });
        }

        res.json({
            success: true,
            data: member
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// POST - Create new member
router.post('/', (req, res) => {
    try {
        const { name, email, phone, membershipPlan, startDate } = req.body;

        // Validation
        if (!name || !email || !phone || !membershipPlan) {
            return res.status(400).json({
                success: false,
                error: 'Please provide all required fields'
            });
        }

        const db = readDB();

        // Check if email already exists
        const existingMember = db.members.find(m => m.email === email);
        if (existingMember) {
            return res.status(400).json({
                success: false,
                error: 'Member with this email already exists'
            });
        }

        // Create new member
        const newMember = {
            id: `MEM${Date.now()}`,
            name,
            email,
            phone,
            membershipPlan,
            startDate: startDate || new Date().toISOString(),
            status: 'active',
            createdAt: new Date().toISOString()
        };

        db.members.push(newMember);
        writeDB(db);

        res.status(201).json({
            success: true,
            message: 'Member registered successfully',
            data: newMember
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// PUT - Update member
router.put('/:id', (req, res) => {
    try {
        const db = readDB();
        const memberIndex = db.members.findIndex(m => m.id === req.params.id);

        if (memberIndex === -1) {
            return res.status(404).json({
                success: false,
                error: 'Member not found'
            });
        }

        // Update member data
        db.members[memberIndex] = {
            ...db.members[memberIndex],
            ...req.body,
            updatedAt: new Date().toISOString()
        };

        writeDB(db);

        res.json({
            success: true,
            message: 'Member updated successfully',
            data: db.members[memberIndex]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// DELETE - Remove member
router.delete('/:id', (req, res) => {
    try {
        const db = readDB();
        const memberIndex = db.members.findIndex(m => m.id === req.params.id);

        if (memberIndex === -1) {
            return res.status(404).json({
                success: false,
                error: 'Member not found'
            });
        }

        const deletedMember = db.members.splice(memberIndex, 1)[0];
        writeDB(db);

        res.json({
            success: true,
            message: 'Member deleted successfully',
            data: deletedMember
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;
