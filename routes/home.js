const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('this is a home page');
});

module.exports = router;
