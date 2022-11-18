const express = require('express');
const router = express.Router();
const apiProductController = require('../controllers/productController');
const apiCategoryController = require('../controllers/CategoriesController');

//MOSTRAR TODOS LOS PRODUCTOS - API
router.get('/products', apiProductController.list);


//MOSTRAR ULTIMO PRODUCTO
router.get('/products/last', apiProductController.last);

//MOSTRAR CATEGORIAS
router.get('/categories', apiCategoryController.categories);

module.exports = router;


