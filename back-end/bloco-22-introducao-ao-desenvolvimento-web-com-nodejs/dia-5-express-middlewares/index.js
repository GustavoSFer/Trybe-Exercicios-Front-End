const express = require('express');
const {user,
  validEmail,
  validPassword} = require('./middlewares/register');
const register = require('./controllers/register');

const app = express();
app.use(express.json());

app.post('/user/register', user, validEmail, validPassword, register);

app.post('/user/login', validEmail, validPassword, (req, res, next) => {
  res.status(200).json({ "token": "86567349784e" })
})

app.listen(3001, () => console.log('App rodando'));
