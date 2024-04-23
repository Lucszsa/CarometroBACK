const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Usuario = sequelize.define('Usuarios', {

    idUsuarios: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

nome: Sequelize.STRING,
email: Sequelize.STRING,
cpf: Sequelize.STRING,
senha: Sequelize.STRING,
celular: Sequelize.STRING,
cep: Sequelize.STRING,
logradouro: Sequelize.STRING,
bairro: Sequelize.STRING,
cidade: Sequelize.STRING,
estado: Sequelize.STRING,
imagem: Sequelize.STRING,
Tipos_Usuarios_idTipos_Usuarios: Sequelize.NUMBER,

},
{

    timestamps: false

});

module.exports = Usuario;