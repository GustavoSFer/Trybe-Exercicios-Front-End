const connection = require('../connection/connection');

const createUser = async (firstName, lastName, email, password) => {
  
  const query = 'INSERT INTO users_crud.users(first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  const cadastro = await connection.execute(query, [firstName, lastName, email, password]);

  return cadastro;
};

const listUsers = async () => {
  const query = 'SELECT * FROM users_crud.users;';
  const listUsers = await connection.execute(query);

  return listUsers;
}

module.exports = {
  createUser,
  listUsers,
}