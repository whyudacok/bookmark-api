const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let bookmarks = [];

// Endpoint untuk mengambil semua bookmark berdasarkan deviceId
app.get('/api/bookmarks', (req, res) => {
    const deviceId = req.query.deviceId;
    const deviceBookmarks = bookmarks.filter(b => b.deviceId === deviceId);
    res.json(deviceBookmarks);
});

// Endpoint untuk menambah bookmark
app.post('/api/bookmarks', (req, res) => {
    const bookmark = req.body;
    bookmarks.push(bookmark);
    res.json(bookmark);
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

module.exports = app;
