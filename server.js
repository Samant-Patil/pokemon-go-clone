const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pokemon-go-clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoints
app.get('/api/pokemon', (req, res) => {
    // Placeholder for getting Pokemon data from the database
    res.json({ message: 'Get Pokemon data' });
});

app.post('/api/pokemon', (req, res) => {
    // Placeholder for adding Pokemon data to the database
    res.json({ message: 'Add Pokemon data' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
