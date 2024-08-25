const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public')); // Serve static files from 'public' directory
app.use(express.json());

// Serve posts from JSON file
app.get('/posts', (req, res) => {
    fs.readFile(path.join(__dirname, 'posts.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading posts data');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
