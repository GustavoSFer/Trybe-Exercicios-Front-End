const express = require('express');
const { getAllBooks, getByAuthorId, bookId, create, isValid } = require('./models/books')
const app = express();

app.use(express.json())

app.get('/books', async (req, res) => {
  const books = await getAllBooks();
  res.status(200).json(books);
});

app.get('/books', async (req, res) => {
  const { id } = req.query;
  const booksAuthor = await getByAuthorId(id);

  res.status(200).json(booksAuthor);
});


app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const retorno = await bookId(id);
  if (retorno.length === 0) return res.json({ message: 'Not found' });

  res.status(200).json(retorno);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if(!await isValid(title, author_id)) return res.status(400).json({ message: 'Dados invalido '});
  
  await create(title, author_id);

  return res.status(201).json({ message: 'Cadastrado com sucesso' });
})


app.listen(3000, () => console.log('Rodando na posta 3000'));