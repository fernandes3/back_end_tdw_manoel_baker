const express = require('express');
const router = express.Router();


const productController =  require('../controllers/productController');


router.get('/',productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/addProducts', productController.create);
router.put('/updateProduct/:id',productController.update);
router.delete('/deleteProduct/:id', productController.delete);

module.exports = router;