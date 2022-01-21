const connection = require('../connection/connection');
const { updateUser } = require('../controller/userControlle');

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

const userById = async (id) => {
  const query = 'SELECT * FROM users_crud.users WHERE id = ?';

  const userId = await connection.execute(query, [id]);
  
  return userId;
}

const userUpdate = async (firstName, lastName, email, password, id) => {
  const query = 'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;';

  const updadefeito = await connection.execute(query, [firstName, lastName, email, password, id]);

  return updadefeito;
}

module.exports = {
  createUser,
  listUsers,
  userById,
  userUpdate,
}