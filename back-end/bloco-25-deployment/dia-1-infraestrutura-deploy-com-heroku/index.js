const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Está vivo!!!');
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))