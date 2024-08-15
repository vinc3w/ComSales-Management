const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification');

router.get('/notification/all', notificationController.getAll);
router.post('/notification/hbd', notificationController.happyBirthday);
router.post('/notification', notificationController.create);
router.delete('/notification', notificationController.delete);
router.delete('/notification/all', notificationController.deleteAll);

module.exports = router;
