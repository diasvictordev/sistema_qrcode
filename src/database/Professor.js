const Sequelize = require('sequelize');
const connection = require('./database');

const Professor = connection.define('qr_sistema',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
}
)

Professor.sync({force:false}).then(()=>{});

module.exports = Professor;