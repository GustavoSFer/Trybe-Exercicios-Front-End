
const imc = (peso, altura) => {
  const imc = peso / Math.pow(altura / 100, 2);
  console.log(`o seu IMC é de: ${imc}`);
}

imc(70, 1.67);