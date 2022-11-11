const express = require('express');
const router = express.Router();


const categoryController =  require('../controllers/categoryController');


router.get('/',categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/addCategory', categoryController.create);
router.put('/updateCategory/:id',categoryController.update);
router.delete('/deleteCategory/:categoryId', categoryController.delete);

module.exports = router;