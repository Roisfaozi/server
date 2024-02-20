const express = require('express');
const genreController = require('../controllers/genres');
const router = express.Router();

router.post('/', genreController.createGenre);

router.get('/', genreController.getGenres);

module.exports = router;
