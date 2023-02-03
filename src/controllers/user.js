const { request, response } = require('express');

const User = require('../models/user');
const error = require('../utils/errorHandler');

const readUsers = async( req = request, res = response ) => {
    try {
        const readAllUsers = await User.findAndCountAll({ limit: 10 });
        res.send( readAllUsers );
    } catch (e) {
        throw error('Bad Request', 400 );
    }
}

const createUser = async( req = request, res = response ) => {
    try {
        const { body } = req;
        const createNewUser = await User.create( body );
        res.send( createNewUser );
    } catch (e) {
        throw error('Bad Request', 400 );
    }
}

const updateUser = async( req = request, res = response ) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const updateUserFinded = await User.findByPk(id);
        updateUserFinded.update(body);
        res.send( updateUserFinded );
    } catch (e) {
        throw error('Bad Request', 400 );
    }
}

const deleteUser = async( req = request, res = response ) => {
    try {
        const { id } = req.params;
        const updateUserFinded = await User.findByPk(id);
        updateUserFinded.destroy();
        res.send( updateUserFinded );
    } catch (e) {
        throw error('Bad Request', 400 );
    }
}

module.exports = {
    readUsers,
    createUser,
    updateUser,
    deleteUser
}