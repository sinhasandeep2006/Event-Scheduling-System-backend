const express = require('express');
const router = express.Router();
const { getAvailability, scheduleSession } = require('../controllers/scheduleController');

router.get('/availability/:userId', getAvailability);
router.post('/schedule', scheduleSession);

module.exports = router;
