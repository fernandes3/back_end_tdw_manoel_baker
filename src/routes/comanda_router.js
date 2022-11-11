const express = require('express');
const router = express.Router();


const comandaController =  require('../controllers/comandaController');


router.get('/',comandaController.getAllComandas);
router.get('/:id', comandaController.getComandaById);
router.post('/addComanda', comandaController.create);
router.put('/updateComanda/:id',comandaController.update);
router.delete('/deleteComanda/:id', comandaController.delete);

module.exports = router;