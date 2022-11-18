const db = require("../database/models");
const Op = db.Sequelize.Op;

const apiProductController = {
    list: (req, res) => {

        totals = db.Product.findAll({
            include: [
                { association: 'categories' }
            ]
        })
        .then(products => {
            totals=products.length
            return res.status(200).json({
                total: products.length,
                data: products,
                status:200})
    })
},
    last: (req, res) => {
        db.Product
        .findOne({
            order: [
                ['id','DESC']
            ]
    }
)
        .then(products => {
            return res.status(200).json({
                data: products,
                status:200})
    })
    },
}

module.exports = apiProductController;
