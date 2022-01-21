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

const isValid = async (title, author_id) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!author_id || typeof author_id !== 'number' ) return false;

  return true;
};

const create = async (title, author_id) => {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)', [title, author_id]);
  // const [idAuthor] = await connection.execute('SELECT author_id FROM model_example.books;');
  // if (title.length < 2 || !title) return false;
  // for (let i = 0; i < idAuthor.length; i += 1) {
  //   console.log(idAuthor[i]);
  //   if(!author_id || typeof author_id !== 'number' || author_id !== idAuthor[i]) return false;
  // }
  // return true;
}

module.exports = {
  getAllBooks,
  getByAuthorId,
  bookId,
  create,
  isValid,
}