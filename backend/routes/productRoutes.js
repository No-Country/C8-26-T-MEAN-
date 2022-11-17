const express = require('express');
const router = express.Router();
const apiProductController = require('../controllers/productController');

//MOSTRAR TODOS LOS USUARIOS - API
router.get('/products', apiProductController.list);

//MOSTRAR ULTIMO USUARIO
router.get('/products/last', apiProductController.last);
module.exports = router;


// import { Router } from "express";
// import { getProducts } from "../controllers/productsController.js";

// const router = Router();

// router.get("/api/products", getProducts)

// export default getProducts