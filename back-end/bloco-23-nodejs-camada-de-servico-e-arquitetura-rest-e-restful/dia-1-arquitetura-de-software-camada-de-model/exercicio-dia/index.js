const express = require('express');
const { user, getListUser } = require('./controller/userControlle');

const app = express();
app.use(express.json());

app.post('/user', user);
app.get('/user', getListUser);


app.listen(3001, () => console.log('App rodando'));