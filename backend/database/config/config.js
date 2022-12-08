const DB_DATABASE = require('../../configdos')
const DB_HOST = require('../../configdos')
const DB_PASSWORD = require('../../configdos')
const DB_USER = require('../../configdos')
const PORT = require('../../configdos')

module.exports = {
    "development": {
        "username": DB_USER,
        "password": DB_PASSWORD,
        "database": DB_DATABASE,
        "host": DB_HOST,
        "dialect": "mysql",
        "port": PORT
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
