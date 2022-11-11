const express = require('express');
const router = express.Router();


const unidadeMedidaController =  require('../controllers/unidadeMedidaController');


router.get('/',unidadeMedidaController.getAllProducts);
router.get('/:id', unidadeMedidaController.getUnidadeMedidaById);
router.post('/addUnidadeMedida', unidadeMedidaController.create);
router.put('/updateUnidadeMedida/:id',unidadeMedidaController.update);
router.delete('/deleteUnidadeMedida/:id', unidadeMedidaController.delete);

module.exports = router;