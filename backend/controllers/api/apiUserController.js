// import db from '../../database/models/index.js'
// const Op = db.Sequelize.Op;
// const apiUserControllers = {
    

//     list: (req, res) => {
//         totals = db.User.findAll()
//         .then(users => {
//             totals=users.length
//             return res.status(200).json({
//                 total: users.length,
//                 data: users,
//                 status:200})
//         })
//     },
//     last: (req, res) => {
//         db.User
//         .findOne({
//             order: [
//                 ['id','DESC']
//             ]
//         }
//     )
//         .then(users => {
//             return res.status(200).json({
//                 data: users,
//                 status:200})
//     })
//     }
// }

// export default apiUserControllers