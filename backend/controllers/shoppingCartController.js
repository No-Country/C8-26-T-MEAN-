const { validationResult } = require('express-validator');

const queries = require('../database/queries/index');
const orderQueries = require("../database/queries/orderQueries");
const orderDetailQueries = require("../database/queries/orderDetailQueries");

const db = require('../database/models');
const userQueries = require('../database/queries/userQueries');


const apiShoppingCartController = {
    addProduct: async (req,res) => {
        
        let currentUser = req.body.user;
        let currentUserPoints = req.body.user.points
        let currentProductPoints = req.body.product.price
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
                    
                    const orderUpdated = await orderQueries.find(currentUser.id)
                    const orderDetailUpdated = await orderDetailQueries.findMatch(orderUpdated.id,productId)
                    
                    res.status(200).json({
                        orderUpdated,
                        orderDetailUpdated
                    })
        }
        } else {
            let order = await queries.Order.find(currentUser.id)
            let currentUserOrderPoints = order.ammount
            console.log(order)
           // let  total = req.body.total
            let totalWithOrder = (currentUserPoints - currentUserOrderPoints  - currentProductPoints)
           // let totalWithOrder = total
            
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

        const orderUpdated = await orderQueries.find(currentUser.id)
        const orderDetailUpdated = await orderDetailQueries.findMatch(orderUpdated.id,productId)

        res.status(200).json({
            orderUpdated,
            orderDetailUpdated
            })
            }
        }
        
        } catch (e) {
            console.log(e);
        }
    },

    showPending: async (req, res) => {
        
        let currentUserId = req.params.id
        const products = await queries.OrderDetail.getCartById(currentUserId);
        
        res.status(200).json({products})
    },

    checkout: async (req, res) => {
        let currentUser = req.body.user;
        let currentOrderPoints = req.body.user.orderPoints;
        let currentUserPoints = req.body.user.points;
        

        const updatedPoints = currentUserPoints - currentOrderPoints

        const order = await orderQueries.find(currentUser.id)

        await queries.Order.update({
                    id:order.id
                });

        await db.User.update({
            points: updatedPoints
            },
            {
                where: {
                    id: currentUser.id
                }
        })
        
        const user = await userQueries.findById(currentUser.id)
        const orderUpdated = await orderQueries.findOrderClosed(currentUser.id)

        res.status(200).json({orderUpdated,user})

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
