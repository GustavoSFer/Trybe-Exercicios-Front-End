const validaCep = require('../Services/validacoes')
const quers = require('../Model/quers')

const ping = (_req, res) => {
  res.status(200).json({ message: 'pong!' });
}

const cep = async (req, res) => {
  const { cep } = req.params;
  const cepVali = validaCep.validacaoCep(cep);

  if(!cepVali) return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });

  const queryCep = await quers.consultaCep(cep);
  if (queryCep.length === 0) return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } });

  return res.status(200).json(queryCep);
  
}

module.exports = {
  ping,
  cep,
}