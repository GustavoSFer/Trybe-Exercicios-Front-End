const connection = require('../connection/connection');

const createUser = async (firstName, lastName, email, password) => {
  
  const query = 'INSERT INTO users_crud.users(first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  const cadastro = await connection.execute(query, [firstName, lastName, email, password])

  console.log(cadastro);
  return cadastro;
};

module.exports = {
  createUser,
}