const { validationResult } = require('express-validator');

const queries = require('../database/queries/index');
const orderQueries = require("../database/queries/orderQueries");

const apiShoppingCartController = {
    // showAll: async (req, res) => {
    //     let orders = await queries.Order.showAll();
    //     res.render('users/userOrders',{ orders });
    // },

    // showByUserId: async (req, res) => {
    //     let orders = await queries.Order.search(res.locals.userLogged.id);
    //     res.render('users/userOrders',{ orders });
    // },

    // showPending: async (req, res) => {
    //     const id = res.locals.userLogged.id;
    //     const products = await queries.OrderDetail.getCartById(id);
      
    //     let total = 0;
    //     products.map(detail => total += detail.quantity * detail.price);

    //     res.render('users/userShoppingCart',{ products, total });
    // },
    

    // addProductOld: async (req,res) => {
    //     let currentUser = res.locals.userLogged;

    //     //Me fijo si el usuario ya tiene una orden pendiente, sino creo una
    //     let order = await queries.Order.find(currentUser.id)
    //     if ( order === null ) order = await queries.Order.create(currentUser);

    //     //Agrego el producto si no existe
    //     await queries.OrderDetail.create(order.id,req.params.id)

    //     res.redirect('/usuarios/carrito');
    // },

    // checkout: async (req,res) => {
    //     const order_id = parseInt(req.params.id);
    //     let orderDetail = JSON.parse(JSON.stringify(req.body));
    //     let total_quantity = 0;

    //     for (let index in orderDetail.product_id){
    //         total_quantity += parseInt(orderDetail.quantity[index]);

    //         await queries.OrderDetail.update({
    //             order_id: order_id,
    //             product_quantity: orderDetail.quantity[index],
    //             product_id: orderDetail.product_id[index],
    //         });
    //     }

    //     const [[{total_price}]] = await queries.OrderDetail.getTotalPriceById(order_id);

    //     await queries.Order.update({
    //         totalQuantity: total_quantity,
    //         ammount: total_price,
    //         id: order_id
    //     });

    //     res.redirect('/');
    // }
    addProduct: async (req,res) => {
        
        let currentUser = req.user;
        let currentUserPoints = req.user.points
        let currentProductPoints = req.product.points
        let currentUserOrderPoints = req.user.order.points
        
        try {

        //Me fijo si el usuario ya tiene una orden pendiente, sino creo una
        let order = await queries.Order.find(currentUser.id)
        
        if ( order === null ) {
            let total = (currentUserPoints - currentProductPoints)
            if (total < 0 ) {
                {
                    res.status(401).json({
                        message: "Puntos insuficientes",
                    })
                }
            } else {
        //Creo la orden en blanco        
        order = await queries.Order.create(currentUser);
        //Agrego el producto si no existe
        orderDetail = await queries.OrderDetail.create(order.id,req.params.id)

        res.status(200).json({
            order,
            orderDetail
            })
        }
        } else {
            let totalWithOrder = (currentUserPoints - currentUserOrderPoints - currentProductPoints)
            if (totalWithOrder < 0 ) {
                {
                    res.status(401).json({
                        message: "Puntos insuficientes",
                    })
                }
            } else {
            //Agrego el producto si no existe
        order = await orderQueries.find(user.id)
        orderDetail = await queries.OrderDetail.create(order.id,req.params.id)
        res.status(200).json({
            order,
            orderDetail
            })
            }
        }
        
        
        } catch (e) {
            console.log(e);
        }
}

}

module.exports = apiShoppingCartController;
