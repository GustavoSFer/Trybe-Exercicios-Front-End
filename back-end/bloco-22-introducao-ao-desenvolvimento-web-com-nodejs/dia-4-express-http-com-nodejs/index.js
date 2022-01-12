const express = require('express');

const app = express();
app.get('/ping', (req, res) => {
  res.status(200).send({ message: 'pong' });
})

app.listen(3001, () => {
  console.log('app rodando na porta 3001');
});