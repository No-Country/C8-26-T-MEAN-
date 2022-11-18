const express = require('express');
const router = express.Router();
const apiProductController = require('../controllers/productController');
const apiCategoryController = require('../controllers/CategoriesController');

//MOSTRAR TODOS LOS PRODUCTOS - API
router.get('/products', apiProductController.list);


//MOSTRAR ULTIMO PRODUCTO
router.get('/products/last', apiProductController.last);

//MOSTRAR DETALLE DE PRODUCTO - API
router.get('/products/:id', apiProductController.detail);

//MOSTRAR CATEGORIAS
<<<<<<< HEAD:backend/routes/product.routes.js
router.get('/categories', apiCategoryController.categories);
=======
router.get('/categories', apiCategoryController.list);
>>>>>>> 46a2743654946216bf832b63fc4f1f44d47e4bfc:backend/routes/productRoutes.js

module.exports = router;


