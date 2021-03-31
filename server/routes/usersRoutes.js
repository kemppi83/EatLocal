const express = require('express');

const router = express.Router();
const { getAllUsers, getUser, registerUser } = require('../controllers/users');

router.get('/', getAllUsers);
router.post('/user', getUser);
router.post('/register', registerUser);
module.exports = router;