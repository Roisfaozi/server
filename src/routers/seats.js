const express = require('express');
const router = express.Router();
const seatsController = require('../controllers/seats');

router.post('/', seatsController.addSeat);
router.get('/:premiere_id', seatsController.getSeatsByPremiereId);
router.put('/:id', seatsController.updateSeatStatus);
router.delete('/:id', seatsController.deleteSeatById);

module.exports = router;
