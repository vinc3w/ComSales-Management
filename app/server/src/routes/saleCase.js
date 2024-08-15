const express = require('express');
const router = express.Router();
const saleCaseController = require('../controllers/saleCase');

router.get('/case', saleCaseController.get);
router.post('/case', saleCaseController.create);
router.get('/case/form', saleCaseController.getForm);
router.put('/case', saleCaseController.update);
router.put('/case/form', saleCaseController.updateForm);
router.delete('/case', saleCaseController.delete);
router.delete('/case/form', saleCaseController.deleteForm);

module.exports = router;
