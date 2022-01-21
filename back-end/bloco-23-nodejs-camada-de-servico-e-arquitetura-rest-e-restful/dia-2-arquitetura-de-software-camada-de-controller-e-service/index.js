const express = require('express');
const ceps = require('./Controller/ceps');

const app = express();
const PORT = process.env.PROT || '3000';

app.get('/ping', ceps.ping);

app.listen(PORT, console.log(`App rodando n porta ${PORT}`));