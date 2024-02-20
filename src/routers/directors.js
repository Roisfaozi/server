const express = require('express');
const directorController = require('../controllers/directors');
const router = express.Router();

router.post('/', directorController.createDirector);

router.get('/', directorController.getDirectors);

module.exports = router;
