const express = require('express');
const router = express.Router();
const apiUserController = require('../controllers/userController');

//MOSTRAR TODOS LOS USUARIOS - API
router.get('/users', apiUserController.list);

//MOSTRAR ULTIMO USUARIO
router.get('/users/last', apiUserController.last);

router.post('/users/auth', apiUserController.auth);

module.exports = router;

