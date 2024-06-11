var express = require('express');
var router = express.Router();
const multer = require('../middleware/multer');

const movieController = require('../controllers/movies');

router.get('/', movieController.getAllMovies);
router.get('/search', movieController.searchMovieByTitle);
router.get('/sort', movieController.sortMovies);
router.get('/:movieId', movieController.getMovieById);
router.post('/', multer.upload, movieController.addMovie);
router.put('/:movieId', multer.upload, movieController.updateMovie);
router.delete('/:movieId', movieController.deleteMovie);

module.exports = router;
