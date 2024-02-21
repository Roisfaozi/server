const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookings');
const { authenticateUser } = require('../middleware/auth');

router.post('/', authenticateUser, bookingsController.addBooking);
router.get('/', authenticateUser, bookingsController.getBookings);
router.get(
  '/:id/details',
  authenticateUser,
  bookingsController.getBookingDetailsById
);
router.get('/:id', authenticateUser, bookingsController.getBookingById);
router.put('/:id', authenticateUser, bookingsController.updateBooking);
router.delete('/:id', authenticateUser, bookingsController.deleteBookingById);

module.exports = router;
