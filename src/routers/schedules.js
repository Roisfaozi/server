var express = require('express');
var router = express.Router();
const schedulesController = require('../controllers/schedules');

router.get('/', schedulesController.getAllSchedules);
router.get('/:scheduleId', schedulesController.getScheduleById);
router.post('/', schedulesController.addSchedule);
router.put('/:scheduleId', schedulesController.updateSchedule);
router.delete('/:scheduleId', schedulesController.deleteSchedule);

module.exports = router;
