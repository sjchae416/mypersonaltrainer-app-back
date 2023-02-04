const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

// CRUD Read all workouts
router.get('/', async (req, res) => {
	try {
		const workouts = await Workout.find({});

		res.json(workouts);
	} catch (err) {
		console.error(err);
	}
});

// CRUD Read a specific workout by id
router.get('/:id', async (req, res) => {
	try {
		const workout = await Workout.findById(req.params.id);

		res.json(workout);
	} catch (err) {
		console.error(err);
	}
});

// CRUD Create a workout
router.get('/create', async (req, res) => {
	const workout = new Workout({
		name: 'Bench Press',
		reps: 5,
		sets: 4,
	});

	try {
		await workout.save();
		res.json(workout);
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;
