require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MongoDB_url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => {
	console.log('Connected to Databse');
});

app.use(express.json());
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});

// NOTE create REST API (CRUD)
// Create a routine
// Read all routines
// Read a routine(:id)
// Update a routine(:id)
// Delete a routine(:id)
