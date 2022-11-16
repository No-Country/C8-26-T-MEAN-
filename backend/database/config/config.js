import mysql from 'mysql2';

export const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'nocountry',
  database: 'giftclub_db'
})





// module.exports = {
//   "development": {
//     "username": "root",
//     "password": "nocountry",
//     "database": "giftclub_db",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "port":"3306"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }

