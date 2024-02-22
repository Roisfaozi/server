const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/tickets');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware.authenticateUser);

router.get('/', ticketController.getTickets);
router.get('/:id', ticketController.getTicketById);
router.post('/', ticketController.addTicket);
router.put('/:id', ticketController.updateTicket);
router.delete('/:id', ticketController.deleteTicketById);

module.exports = router;
