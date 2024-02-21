var express = require('express');
var router = express.Router();
const schedulesController = require('../controllers/schedules');

router.post('/', schedulesController.addSchedule);
router.get('/', schedulesController.getSchedules);
router.get('/details', schedulesController.getScheduleDetails);
router.get('/details/:id', schedulesController.getScheduleDetailsById);
router.get('/:id', schedulesController.getScheduleById);
router.put('/:id', schedulesController.updateSchedule);
router.delete('/:id', schedulesController.deleteScheduleById);
module.exports = router;
