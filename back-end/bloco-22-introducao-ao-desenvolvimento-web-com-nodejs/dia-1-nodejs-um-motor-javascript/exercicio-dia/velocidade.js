const readline = require('readline-sync');

const velocidade = () => {
  const distancia = readline.questionInt('Informe a distancia: ');
  const tempo = readline.questionInt("informe o tempo: ");

  const veloMedia = ((distancia * 100) / (tempo * 60 )).toFixed(2);

  console.log(`a velocidade foi de: ${veloMedia}`);

}

velocidade();