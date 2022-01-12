const { expect } = require('chai');

const verificaNum = require('./verificaNum');

describe('Verificando quando o numero é positivo', () => {
  it('verificando se é uma string', () => {
    const content = verificaNum(1);

    expect(content).to.be.a('string');
  });

  it('é igual a "positivo"', () => {
    const resposta = verificaNum(10);

    expect(resposta).to.be.equals('positivo');
  });

  describe('quando o numero é zero', () => {
    it('numero neutro', () => {
      const valor = verificaNum(0);

      expect(valor).to.be.equal('neutro');
    });
  });

  describe('Quando o numero é negativo', () => {
    it('numero negativo', () => {
      const valor = verificaNum(-3);

      expect(valor).to.be.equal('negativo');
    });
  });

  describe('Quando não é um numero', () => {
    it('informando uma letra', () => {
      const letra = verificaNum('s');

      expect(letra).to.be.equal('não é um numero');
    })
  });
});