const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

router.post('/', productController.store);
router.get('/', productController.get);
router.get('/:slug', productController.getBySlug);
router.get('/admin/:id', productController.getByID);
router.get('/tags/:tag', productController.getByTag);
router.put('/:id', productController.put);
router.delete('/:id', productController.delete);

module.exports = router;