const { DataTypes } = require('sequelize');

const db = require('../database/config');

const Level = db.define(
    'Nivel', {
        Nivel:{
            type: DataTypes.TINYINT
        },
    },
    {
        timestamps: false
    }
);

module.exports = Level;