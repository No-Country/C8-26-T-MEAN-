const db = require("../database/models");
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
    }
}
module.exports = apiUserController;




// import { pool } from '../database/config/config.js'
// const promisePool = pool.promise();

// export const getUsers = async (req, res) =>{

//     try {
//         const [result] = await promisePool.query("SELECT * FROM users ORDER BY created_at ASC");
//         res.json(result)        
//     } catch (error) {
//         return res.status(500).json({message: error.message});
//     }

// }

