const { Router } = require('express');

const { readUsers, createUser, updateUser, deleteUser } = require('../controllers/user');

const router = Router();

router.get('/', readUsers );
router.post('/', createUser );
router.put('/:id', updateUser );
router.delete('/:id', deleteUser );

module.exports = router;