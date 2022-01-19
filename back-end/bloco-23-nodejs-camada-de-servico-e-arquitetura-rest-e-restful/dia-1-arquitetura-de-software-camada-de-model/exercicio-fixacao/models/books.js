const connection = require('./connection');

const getAllBooks = async () => {
  const [books] = await connection.execute('SELECT id, title FROM model_example.books;');

  return books;
}


const getByAuthorId = async (id) => {
  const query = 'SELECT title FROM model_example.books WHERE author_id = ?;';
  const [books] = await connection.execute(query, [id]);
  return books;
}


const bookId = async(id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?';
  const [book] = await connection.execute(query, [id]);

  return book;
}

const create = async (title, author_id) => {
  const query = 'INSERT INTO (title, author_id) VALUES (? ,?)';
  const idAuthor = connection.execute('SELECT author_id FROM model_example.books;');
  if (title.length < 2 || !title) return false;
  // if(!author_id || author_id ) 
  return console.log(idAuthor);
}

module.exports = {
  getAllBooks,
  getByAuthorId,
  bookId,
  create,
}