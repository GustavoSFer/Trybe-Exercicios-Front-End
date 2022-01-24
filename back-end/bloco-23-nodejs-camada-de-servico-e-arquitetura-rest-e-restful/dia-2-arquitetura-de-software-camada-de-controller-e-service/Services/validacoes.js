const Joi = require('@hapi/joi');
const joi = require('@hapi/joi');

const validacaoCep = (cep) => {
  const cepRegex = /[0-9]{5}-[0-9]{3}$/;
  return cepRegex.test(cep);
}
module.exports = {
  cep: Joi.string().required(),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().min(2).required(),
  validacaoCep,
}