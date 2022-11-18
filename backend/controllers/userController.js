const db = require("../database/models");
const queries = require('../database/queries/index')
const crypto = require("crypto-js");
const bcrypt = require('bcryptjs');
const Op = db.Sequelize.Op;

const apiUserController = {
    list: (req, res) => {
        totals = db.User.findAll()
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

    auth: async (req,res) => {
        try {
            // const privateSeed = 'DigitalHouse';
    
            //Desencripto la contraseña
            // const hashPassword = crypto.AES.decrypt(req.body.password, "8");
            // const decryptedPassword = hashPassword.toString(crypto.enc.Utf8);
    
            const user = await queries.User.findByUser(req.body.email);
            if (user !== null && bcrypt.compareSync(req.body.password, user.password)){
                res.status(200).json({
                    access: "Granted",
                    user: {
                        username: user.user,
                        name: `${user.first_name} ${user.last_name}`,
                        image: `${user.image_url}`,
                        points: `${user.points}`
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
    }

}
module.exports = apiUserController;




