const express = require('express');
const { user } = require('./controller/userControlle');

const app = express();
app.use(express.json());

app.post('/user', user);


app.listen(3001, () => console.log('App rodando'));