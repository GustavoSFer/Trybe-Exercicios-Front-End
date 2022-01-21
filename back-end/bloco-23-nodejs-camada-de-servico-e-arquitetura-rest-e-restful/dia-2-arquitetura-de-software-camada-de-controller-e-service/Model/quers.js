const connection = require('./connection');

const consultaCep = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?;';
  const [consulta] = await connection.execute(query, [cep]);
  return consulta;
}

module.exports = {
  consultaCep,
}