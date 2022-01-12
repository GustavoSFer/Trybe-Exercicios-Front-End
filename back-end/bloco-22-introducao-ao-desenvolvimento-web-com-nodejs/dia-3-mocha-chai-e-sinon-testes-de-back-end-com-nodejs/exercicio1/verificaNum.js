const verificaNum = (n) => {
  if (n > 0) {
    return 'positivo';
  }
  if (n == 0) {
    return 'neutro';
  }
  if (n < 0) {
    return 'negativo';
  }
  if (typeof n != 'number') {
    return 'não é um numero';
  }
}

module.exports = verificaNum;