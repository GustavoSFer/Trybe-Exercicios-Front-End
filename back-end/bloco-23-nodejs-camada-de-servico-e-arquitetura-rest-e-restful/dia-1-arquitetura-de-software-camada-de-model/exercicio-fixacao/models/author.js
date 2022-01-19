const connection = require('./connection');

const getAllAuthor = async () => {
  const [author] = await connection.execute('SELECT id, title FROM model_example.books;');

  return author;
}

module.exports = {
  getAllAuthor,
}