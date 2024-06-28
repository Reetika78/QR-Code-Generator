


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes.js');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, 'client')));

app.use(router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



