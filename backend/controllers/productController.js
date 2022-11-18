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

    find: async (id) =>  await db.Product.findOne({
        where: {
            id: id
        },
        include: [
            {association: 'categories'}
        ]
    }),

    detail: async (req,res) => {
        try {

            //Hago los pedidos a la Base de Datos
            const product = await apiProductController.find(req.params.id);
            console.log(product);
            return res.status(200).json({
                data: product,
                status:200}) 
        } catch (e) {
            //Si hay algun error, los atajo y muestro todo vacio
            console.log('error,' , e);
            return res.status(400).json(e);
        }
    }
    
}

module.exports = apiProductController;
