const { validationResult } = require('express-validator');

const queries = require('../database/queries/index');
const orderQueries = require("../database/queries/orderQueries");
const orderDetailQueries = require("../database/queries/orderDetailQueries");

const db = require('../database/models');


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

    // checkoutOld: async (req,res) => {
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
        
        let currentUser = req.body.user;
        let currentUserPoints = req.body.user.points
        let currentProductPoints = req.body.product.points
        let currentUserOrderPoints = req.body.user.orderPoints
        let productId = req.body.product.id
        
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
        orderDetail = await queries.OrderDetail.create(order.id,productId)

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
        order = await orderQueries.find(currentUser.id)
        orderDetail = await queries.OrderDetail.create(order.id,productId)
        res.status(200).json({
            order,
            orderDetail
            })
            }
        }
        
        } catch (e) {
            console.log(e);
        }
    },

    showPending: async (req, res) => {
        
        let currentUser = req.body.user;
        const products = await queries.OrderDetail.getCartById(currentUser.id);
        
        res.status(200).json({products})
    },

    checkout: async (req, res) => {
        let currentUser = req.body.user;
        
        order = await orderQueries.find(currentUser.id)

        await queries.Order.update({
                    id:order.id
                });

        res.status(200).json({order})

    },

    deleteFromCart:  async (req, res) => {
        
        let currentUser = req.body.user;
        let currentOrder = req.body.order;
        let currentOrderDetail = req.body.orderDetail;
        let currentOrderDetailQ = req.body.orderDetail.quantity;
        let currentOrderDetailP = req.body.orderDetail.price;
        let currentOrderItem_q = req.body.order.item_q;
        let currentOrderAmmount = req.body.order.ammount;

        let updatedItem_q = currentOrderItem_q - currentOrderDetailQ
        let updatedAmmount = currentOrderAmmount - currentOrderDetailP

        if (updatedItem_q !== 0) {

            await db.Order.update({
                items_q: updatedItem_q,
                ammount: updatedAmmount
            },
            {
                where: {
                    id: currentOrder.id
                }
        })} else {
            await db.Order.destroy({
                where: {
                    id: currentOrder.id
                }
            })
        }

        
        await db.OrderDetail.destroy({
            where: {
                id: currentOrderDetail.id
            }
        })


        const products = await queries.OrderDetail.getCartById(currentUser.id);
        
        res.status(200).json({products})

    }

    }
module.exports = apiShoppingCartController;
