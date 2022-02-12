const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Está vivo!!!');
})

/**
heroku create
git remote -v  ==> Tem que aparecer a url do heroku com o nome heroku
git add .
git commit -m 'mensagem'
git push heroku master ==> sempre necessario enviar para a master do heroku e informando antes que é para o heroku.

===> Com isso é feito o deploy
 */

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))