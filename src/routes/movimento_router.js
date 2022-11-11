const express = require('express');
const router = express.Router();


const movimentoController =  require('../controllers/movimentoController');


router.get('/',movimentoController.getAllMovimento);
router.get('/:id', movimentoController.getMovimentoById);
router.post('/addMovimento', movimentoController.create);
router.put('/updateMovimento/:id',movimentoController.update);
router.delete('/deleteMovimento/:id', movimentoController.delete);

module.exports = router;