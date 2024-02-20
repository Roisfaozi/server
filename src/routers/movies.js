var express = require('express');
var router = express.Router();
const movieController = require('../controllers/movies');

router.get('/', movieController.getAllMovies);
router.get('/movies/search', movieController.searchMovieByTitle);
router.get('/sort', movieController.sortMovies);
router.get('/:movieId', movieController.getMovieById);
router.post('/', movieController.addMovie);
router.put('/:movieId', movieController.updateMovie);
router.delete('/:movieId', movieController.deleteMovie);

module.exports = router;
