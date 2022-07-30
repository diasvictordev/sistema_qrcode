const Sequelize = require('sequelize');
const connection = require('./database');

const Curso = connection.define('qr_sistema',{
   id_curso :{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    periodo:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    }
}
)

Curso.sync({force:false}).then(()=>{});

module.exports = Curso;