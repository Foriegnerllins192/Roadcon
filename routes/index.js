const express = require('express');
const router = express.Router();
const path = require('path');

// Serve homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Serve about page
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about.html'));
});

// Serve services page
router.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/services.html'));
});

// Serve projects page
router.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/projects.html'));
});

// Serve equipment page
router.get('/equipment', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/equipment.html'));
});

// Serve certifications page
router.get('/certifications', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/certifications.html'));
});

// Serve contact page
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/contact.html'));
});

// Serve quote request page
router.get('/quote', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/quote.html'));
});

module.exports = router;