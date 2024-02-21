const express = require('express');
const router = express.Router();
const premieresController = require('../controllers/premieres');

router.post('/', premieresController.addPremiere);
router.get('/', premieresController.getPremieres);
router.get('/:id', premieresController.getPremiereById);
router.put('/:id', premieresController.updatePremiere);
router.delete('/:id', premieresController.deletePremiereById);

module.exports = router;
