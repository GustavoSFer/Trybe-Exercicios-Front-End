import { mesesAno } from './meses';
import { estacaoClimatica } from './seasons';

const temporadaSul = {
  [estacaoClimatica.OUTONO]: [mesesAno.MARCO, mesesAno.ABRIL, mesesAno.MAIO, mesesAno.JUNHO],
  [estacaoClimatica.INVERNO]: [mesesAno.JUNHO, mesesAno.JULHO, mesesAno.AGOSTO, mesesAno.SETEMBRO],
  [estacaoClimatica.PRIMAVERA]: [mesesAno.SETEMBRO, mesesAno.OUTUBRO, mesesAno.NOVEMBRO, mesesAno.DEZEMBRO],
  [estacaoClimatica.VERAO]: [mesesAno.DEZEMBRO, mesesAno.JANEIRO, mesesAno.FEVEREIRO, mesesAno.MARCO],
}

const seasonsNorth = {
  [estacaoClimatica.PRIMAVERA]: temporadaSul[estacaoClimatica.OUTONO],
  [estacaoClimatica.VERAO]: temporadaSul[estacaoClimatica.INVERNO],
  [estacaoClimatica.OUTONO]: temporadaSul[estacaoClimatica.PRIMAVERA],
  [estacaoClimatica.INVERNO]: temporadaSul[estacaoClimatica.VERAO],
}