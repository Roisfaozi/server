var express = require('express');
var routers = express.Router();
const userService = require('./users');
const movieService = require('./movies');
const schedulesService = require('./schedules');
const bookingsService = require('./bookings');
/* GET home page. */
routers.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

routers.use('/api/v1/users', userService);
routers.use('/api/v1/movies', movieService);
routers.use('/api/v1/schedules', schedulesService);
routers.use('/api/v1/bookings', bookingsService);

module.exports = routers;
