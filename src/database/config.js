const Sequelize = require('sequelize');

const connection = new Sequelize ('qr_sistema', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;