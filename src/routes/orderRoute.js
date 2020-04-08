const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');

router.post('/', orderController.store);
router.get('/', orderController.get);
//router.get('/admin/:id', orderController.getByID);
//router.put('/:id', orderController.put);
//router.delete('/:id', orderController.delete);

module.exports = router;