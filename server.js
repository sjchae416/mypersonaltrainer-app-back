// NOTE requires
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const homeRouter = require('./routes/home');
const workoutRouter = require('./routes/workouts');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

// NOTE connect to MongoDB Atlas
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_ATLAS_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => {
	console.log('Connected to MongoDB');
});

// NOTE Router routes
app.use('/', homeRouter);
app.use('/workouts', workoutRouter);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

// NOTE server
app.listen(process.env.PORT || 3666, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
