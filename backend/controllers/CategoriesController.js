const db = require("../database/models");
const Op = db.Sequelize.Op;

const apiCategoriesController = {
    list: (req, res) => {
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
