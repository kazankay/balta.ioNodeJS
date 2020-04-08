const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/', customerController.store);
router.get('/', customerController.get);
router.get('/admin/:id', customerController.getByID);
router.put('/:id', customerController.put);
router.delete('/:id', customerController.delete);

module.exports = router;