const { DataTypes } = require('sequelize');

const db = require('../database/config');

const User = db.define(
    'Usuario', {
        Nombre:{
            type: DataTypes.STRING
        },
        Apellidos:{
            type: DataTypes.STRING
        },
        Usuario:{
            type: DataTypes.STRING
        },
        Contraseña:{
            type: DataTypes.STRING
        },
        Niveles:{
            type: DataTypes.TINYINT
        },
    },
    {
        timestamps: false
    }
);

module.exports = User;