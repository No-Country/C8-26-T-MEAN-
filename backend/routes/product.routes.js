const express = require('express');
const router = express.Router();
const apiProductController = require('../controllers/productController');
const apiCategoryController = require('../controllers/CategoriesController');
const apiShoppingCartController = require('../controllers/shoppingCartController');


//MOSTRAR TODOS LOS PRODUCTOS - API
router.get('/products', apiProductController.list);

//MOSTRAR ULTIMO PRODUCTO
router.get('/products/last', apiProductController.last);

//MOSTRAR DETALLE DE PRODUCTO - API
router.get('/products/:id', apiProductController.detail);

//MOSTRAR CATEGORIAS

router.get('/categories', apiCategoryController.list);

//AGREGAR AL CARRITO
router.post('/agregar', apiShoppingCartController.addProduct)

//MOSTRAR PRODUCTOS DEL CARRITO
router.get('/cart/:id', apiShoppingCartController.showPending)

//ELIMINAR PRODUCTO DEL CARRITO
router.post('/delete', apiShoppingCartController.deleteFromCart)

//FINALIZAR PEDIDO
router.post('/checkout', apiShoppingCartController.checkout)

module.exports = router;