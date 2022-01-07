const readline = require("readline-sync");

const imc = () => {
  const peso = readline.questionFloat("Informe seu peso: ");
  const altura = readline.questionFloat("informe sua altura: ");

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(`o seu IMC é de: ${imc}`);

  if (imc < 18.5) {
    console.log('Abaixo do peso (magreza)');
    return;
  }
  if (imc >= 18.5 && imc <= 24.9) {
    console.log('Peso normal');
  }
  if (imc >= 25.0 && imc <= 29.9) {
  console.log('Acima do peso (sobrepeso)');
  }
  if (imc >= 30.0 && imc <= 34.9) {
    console.log('Obesidade grau I');
  }
  if (imc >= 35.0 && imc <= 39.9) {
    console.log('Obesidade grau II');
  }
  if (imc > 40) {
    console.log('Obesidade graus III e IV');
  }
}

imc();
