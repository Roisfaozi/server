const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookings');

router.post('/', bookingController.addBooking);
router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;
