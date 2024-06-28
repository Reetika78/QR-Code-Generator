
// routes.js

const express = require('express');
const controller = require('./controller');
const path = require('path');

const router = express.Router();

router.post('/generate-qr', controller.generateQR);

// Serve the index.html file for the root URL
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

module.exports = router;

