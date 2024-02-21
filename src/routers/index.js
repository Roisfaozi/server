var express = require('express');
var routers = express.Router();
const userService = require('./users');
const movieService = require('./movies');
const schedulesService = require('./schedules');
const bookingsService = require('./bookings');
const genresService = require('./genres');
const directorsService = require('./directors');
const castsService = require('./casts');
const authService = require('./auth');
const locationsService = require('./locations');
const ticketsService = require('./tickets');
const premieresService = require('./premieres');
const uploadService = require('../controllers/upload');

const multer = require('../middleware/multer');
/* GET home page. */
routers.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
routers.use('/api/v1/users', userService);
routers.use('/api/v1/movies', movieService);
routers.use('/api/v1/schedules', schedulesService);
routers.use('/api/v1/bookings', bookingsService);
routers.use('/api/v1/genres', genresService);
routers.use('/api/v1/directors', directorsService);
routers.use('/api/v1/casts', castsService);
routers.use('/api/v1/auth', authService);
routers.use('/api/v1/locations', locationsService);
routers.use('/api/v1/premieres', premieresService);
routers.use('/api/v1/tickets', ticketsService);
routers.use('/api/v1/upload', multer.upload, uploadService.upload);

module.exports = routers;
