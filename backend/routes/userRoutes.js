const express = require('express');
const router = express.Router();
const apiUserController = require('../controllers/userController');

//MOSTRAR TODOS LOS USUARIOS - API
router.get('/users', apiUserController.list);

//MOSTRAR ULTIMO USUARIO
router.get('/users/last', apiUserController.last);

//MOSTRAR DETALLE DE USUARIO - API
router.get('/users/:id', apiUserController.detail);

//RANKING DE PUNTOS POR USUARIO
router.get('/ranking', apiUserController.ranking);

//PROCESAR LOGIN DE USUARIO
router.post('/users/auth', apiUserController.auth);


module.exports = router;

