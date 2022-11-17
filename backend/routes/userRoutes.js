const express = require('express');
const router = express.Router();
const apiUserController = require('../controllers/userController');

//MOSTRAR TODOS LOS USUARIOS - API
router.get('/users', apiUserController.list);

//MOSTRAR ULTIMO USUARIO
router.get('/users/last', apiUserController.last);
module.exports = router;

// import { Router } from 'express';
// import { getUsers } from '../controllers/userController.js'
// // import apiUserControllers  from '../controllers/api/apiUserController.js'
// const router = Router();

// router.get("api/users", getUsers )


// // router.get("/product", getProducts )


// export default router;