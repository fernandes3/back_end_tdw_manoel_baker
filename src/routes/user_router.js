const express = require('express');
const router = express.Router();


const userController = require('../controllers/userController');


router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/login', userController.getUserAuth);
router.post('/addUser', userController.create);
router.put('/updateUser/:id', userController.update);
router.delete('/deleteUser/:id', userController.delete);

module.exports = router;