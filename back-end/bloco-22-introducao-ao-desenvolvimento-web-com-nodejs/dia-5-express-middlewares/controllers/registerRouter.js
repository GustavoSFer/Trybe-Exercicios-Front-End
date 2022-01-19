const express = require('express');
const router = express.Router();
const {user, validEmail, validPassword} = require('../middlewares/register')
const register = require('../controllers/register');


router.post('/register', user, validEmail, validPassword, register)

module.exports = router;