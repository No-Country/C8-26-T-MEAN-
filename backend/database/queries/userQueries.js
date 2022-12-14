const db = require('../models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

module.exports = {
    search: async (query,limit,page) => await db.User.findAll({
        include: [
            // { association: 'interests' },
            // { association: 'genders' },
            { association: 'roles' }
        ],
        limit,
        offset: limit * page
    }),
    
    showAll: async () => await db.User.findAll({
        include: [
            { association: 'roles' }
        ]
    }),

    userPoints: async () => await db.User.findAll({
        order: [
            ['points','DESC']
        ]
    }),

    findById: async (id) => await db.User.findByPk(id,{
        include: [
            // { association: 'interests' },
            // { association: 'genders' },
            { association: 'roles' }
        ] 
    }),

    searchCount: async (query) => await db.User.count({
        where: {
            [Op.or]: [
                {first_name: { [Op.like]: '%' + query + '%' }},
                {last_name: { [Op.like]: '%' + query + '%' }},
                {user: { [Op.like]: '%' + query + '%' }},
                {email: { [Op.like]: '%' + query + '%' }}

            ]
        }
    }),

    findByUser: async (user) => await db.User.findOne({
        where: {
            email: user,
        },
        include: [
            { association: 'roles' },
            { association: 'orders_user' },
        ]
    }),
    
    
    create: async (user) => await db.User.create(user),

    update: async (user) => await db.User.update(user,{
        where: {
            id: user.id
        }
    }),

    delete: async (id) => await db.User.destroy({
        where: {
            id: id
        }
    }),
    
    getInterests: async () => await db.Interest.findAll(),


    lastUser: async () => 
            await db.User.findOne({
                    include: [
                        // { association: 'interests' },
                        // { association: 'genders' },
                        { association: 'roles' }
                    ],
                    order: [
                        ['id','DESC']
                    ]
            }
        )
}