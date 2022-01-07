const readline = require("readline-sync");

const imc = () => {
  const peso = readline.questionFloat("Informe seu peso: ");
  const altura = readline.questionFloat("informe sua altura: ");

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(`o seu IMC é de: ${imc}`);
}

imc();
