const express = require('express');
const router = express.Router();


const perfilController =  require('../controllers/perfilController');


router.get('/',perfilController.getAllProducts);
router.get('/:id', perfilController.getPerfilById);
router.post('/addPerfil', perfilController.create);
router.put('/updatePerfil/:id',perfilController.update);
router.delete('/deletePerfil/:id', perfilController.delete);
    
module.exports = router;