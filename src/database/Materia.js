const Sequelize = require('sequelize');
const connection = require('./database');

const Materia = connection.define('qr_sistema',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    notas:{
        type: Sequelize.FLOAT,
        allowNull: falses
    },
    data_inicio:{
        type: Sequelize.DATE,
        allowNull: false
    },
    data_termino:{
        type: Sequelize.DATE,
        allowNull: false
    },
    presenca:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
}
)

Materia.sync({force:false}).then(()=>{});

module.exports = Materia;