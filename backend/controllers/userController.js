const db = require("../database/models");
const queries = require('../database/queries/index')
const crypto = require("crypto-js");
const bcrypt = require('bcryptjs');
const orderQueries = require("../database/queries/orderQueries");
const Op = db.Sequelize.Op;

const apiUserController = {
    list: (req, res) => {
        totals = db.User.findAll(({
            include: [
                { association: 'roles' }
            ]
        }))
        .then(users => {
            totals=users.length
            return res.status(200).json({
                total: users.length,
                data: users,
                status:200})
    })
},
    last: (req, res) => {
        db.User
        .findOne({
            order: [
                ['id','DESC']
            ]
    }
)
        .then(users => {
            return res.status(200).json({
                data: users,
                status:200})
    })
    },
    find: async (id) =>  await db.User.findOne({
        where: {
            id: id
        },
        include: [
            {association: 'roles'},
            {association: 'orders_user'},
        ]
    }),

    detail: async (req,res) => {
        try {

            //Hago los pedidos a la Base de Datos
            const user = await apiUserController.find(req.params.id);
            return res.status(200).json({
                data: user,
                status:200}) 
        } catch (e) {
            //Si hay algun error, los atajo y muestro todo vacio
            console.log('error,' , e);
            return res.status(400).json(e);
        }
    },

    auth: async (req,res) => {
        try {
            const privateSeed = 'DigitalHouse';
    
            // Desencripto la contraseña
            const hashPassword = crypto.AES.decrypt(req.body.password, privateSeed);
            const decryptedPassword = hashPassword.toString(crypto.enc.Utf8);

            const user = await queries.User.findByUser(req.body.username);
            // console.log(user);
            if (user !== null && bcrypt.compareSync(decryptedPassword, user.password)){
                
            let orderSales = await orderQueries.findAmmount(user.id)

            if (orderSales === null) {
                orderSales=0
            }

                res.status(200).json({
                    access: "Granted",
                    user: {
                        id: user.id,
                        email: user.email,
                        name: `${user.first_name} ${user.last_name}`,
                        points: user.points,
                        role: user.roles.name,
                        image: user.image_url,
                        address: user.address,
                        orderSales:orderSales,
                    } 
                })
            } else {
                res.status(401).json({
                    access: "Denied",
                    detail: "Wrong user or password"
                })
            }
        } catch (e) {
            console.log(e);
        }
    },
    
    ranking: async (req, res) => {
        try {
            
            const userPoints = await queries.User.userPoints();

            const allRankings = userPoints.map( user => {
                return {
                    name: `${user.first_name} ${user.last_name}`,
                    points: user.points,
                }
            })            

            return res.status(200).json({
                rankings: allRankings
            })
        } catch (e) {
            //Si hay algun error, los atajo y muestro todo vacio
            console.log('error,' , e);
            return res.status(400).json(e);
        }
    },

}
module.exports = apiUserController;




