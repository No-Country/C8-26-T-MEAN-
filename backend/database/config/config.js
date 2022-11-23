
// import { createPool } from 'mysql2/promise';

// export const pool = createPool({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: 'Al4m0.t1gr3.t4ng0',
//   database: 'giftclub_db'
// })





module.exports = {
  "development": {
    "username": "sqluser",
    "password": "password",
    "database": "giftclub_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port":"3306"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


// module.exports = {
//     "development": {
//     "username": "usuepqs9enak9ose",
//     "password": "uw0gEX7zIxi5nt42lPRx",
//     "database": "bsh2v4yevwz0memuucmq",
//     "host": "bsh2v4yevwz0memuucmq-mysql.services.clever-cloud.com",
//     "dialect": "mysql",
//     "port": "3306"
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
