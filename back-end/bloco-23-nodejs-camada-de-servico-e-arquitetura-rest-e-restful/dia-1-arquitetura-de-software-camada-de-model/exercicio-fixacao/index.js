const express = require('express');
const { getAllBooks, getByAuthorId, bookId, create } = require('./models/books')
const app = express();

// app.get('/books', async (req, res) => {
//   const books = await getAllBooks();
//   res.status(200).json(books);
// });

// app.get('/books', async (req, res) => {
//   const { id } = req.query;
//   const booksAuthor = await getByAuthorId(id);

//   res.status(200).json(booksAuthor);
// });

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const retorno = await bookId(id);
  if (retorno.length === 0) return res.json({ message: 'Not found' });

  res.status(200).json(retorno);
});

app.post('/books', (req, res) => {
  console.log(req.body);
  // const teste = create(title, author_id);
})

app.listen(3000, () => console.log('Rodando na posta 3000'));