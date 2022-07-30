const Sequelize = require('sequelize');
const connection = require('./database');

const Aluno = connection.define('qr_sistema',{
    matricula:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cpf:{
        type: Sequelize.INTEGER,
        allowNull: falses
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    }
}
)

Aluno.sync({force:false}).then(()=>{});

module.exports = Aluno;
