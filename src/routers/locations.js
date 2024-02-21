const express = require('express');
const router = express.Router();
const locationsController = require('../controllers/locations');

router.post('/', locationsController.addLocation);
router.get('/', locationsController.getLocations);
router.get('/:id', locationsController.getLocationById);
router.put('/:id', locationsController.updateLocation);
router.delete('/:id', locationsController.deleteLocationById);

module.exports = router;
