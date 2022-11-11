const express = require('express');
const router = express.Router();


const itemComandaController =  require('../controllers/itemComandaController');


router.get('/',itemComandaController.getAllItemComanda);
router.get('/:id', itemComandaController.getItemComandaById);
router.post('/addItemComanda', itemComandaController.create);
router.put('/updateItemComanda/:id',itemComandaController.update);
router.delete('/deleteItemComanda/:id', itemComandaController.delete);

module.exports = router;