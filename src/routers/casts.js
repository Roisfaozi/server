const express = require('express');
const castController = require('../controllers/casts');
const router = express.Router();

router.post('/', castController.createCast);

router.get('/', castController.getCasts);

module.exports = router;
