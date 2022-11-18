const db = require("../database/models");
const Op = db.Sequelize.Op;

const apiCategoriesController = {
    categories: (req, res) => {
        totals = db.Category.findAll()
        .then(categories => {
            totals=categories.length
            return res.status(200).json({
                total: categories.length,
                data: categories,
                status:200})
    })
},
}

module.exports = apiCategoriesController;

// import { pool } from '../database/config/config.js'
// const promisePool = pool.promise();


// export const getProducts = async (req, res) => {

//     try {
//         const [result] = await promisePool.query("SELECT * FROM products") 
//         res.json(result)
//     } catch (error) {
//         return res.status(500).json({message: error.message})
//     }
// }