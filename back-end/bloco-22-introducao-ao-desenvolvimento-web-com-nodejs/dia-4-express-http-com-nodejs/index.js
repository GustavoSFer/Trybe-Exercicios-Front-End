const express = require('express');

const app = express();
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "name": "Gustavo" });
})
app.listen(3001, () => {
  console.log('app rodando na porta 3001');
});