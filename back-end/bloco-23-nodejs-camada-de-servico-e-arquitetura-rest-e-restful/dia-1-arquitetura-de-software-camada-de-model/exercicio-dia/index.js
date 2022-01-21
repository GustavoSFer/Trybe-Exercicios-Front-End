const express = require('express');
const { user, getListUser, getUserById, updateUser } = require('./controller/userControlle');

const app = express();
app.use(express.json());

app.post('/user', user);
app.get('/user', getListUser);
app.get('/user/:id', getUserById);
app.put('/user/:id', updateUser);


app.listen(3001, () => console.log('App rodando'));