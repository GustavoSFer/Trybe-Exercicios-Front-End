const express = require('express');
const { user, getUser } = require('./controller/userControlle');

const app = express();
app.use(express.json());

app.post('/user', user);
app.get('/user', getUser);


app.listen(3001, () => console.log('App rodando'));