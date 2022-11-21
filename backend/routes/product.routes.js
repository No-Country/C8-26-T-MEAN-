const express = require('express');
const router = express.Router();
const apiProductController = require('../controllers/productController');
const apiCategoryController = require('../controllers/CategoriesController');

// MOSTRAR TODOS LOS PRODUCTOS - API
router.get('/products', apiProductController.list);


// MOSTRAR ULTIMO PRODUCTO
router.get('/products/last', apiProductController.last);

<<<<<<< HEAD
//MOSTRAR DETALLE DE PRODUCTO - API
router.get('/products/:id', apiProductController.detail);

//MOSTRAR CATEGORIAS
<<<<<<< HEAD
<<<<<<< HEAD:backend/routes/product.routes.js
=======
// MOSTRAR CATEGORIAS
>>>>>>> migbazz
router.get('/categories', apiCategoryController.categories);
=======
=======
>>>>>>> 5957ac18322d0475539dc9f4d3b66248a3de83c6
router.get('/categories', apiCategoryController.list);

module.exports = router;


