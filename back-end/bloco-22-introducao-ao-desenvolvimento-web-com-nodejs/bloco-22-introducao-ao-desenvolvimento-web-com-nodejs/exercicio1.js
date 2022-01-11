const funcNum = (a, b, c) => {
  return promise = new Promise((resolve, reject) => {
    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number') {
      reject("informe apenas numeros");
    }
  
    const resultado = (a + b) * c;
  
    if ( resultado < 50 ) {
      return reject('Valor muito baixo');
    }
    resolve(resultado);
  })
}

// funcNum(10, 10, 10)
//   .then((resposta) => console.log(resposta))
//   .catch((error) => console.log(error));

// funcNum(10, 3, 'a')
//   .then((resposta) => console.log(resposta))
//   .catch((err) => console.log(err));

// funcNum(1, 4, 6)
//   .then((resp) => console.log(resp))
//   .catch((e) => console.log(e));

// funcNum(numeroAleatorioA, numeroAleatorioB, numeroAleatorioC)
//   .then((resposta) => console.log(resposta))
//   .catch((e) => console.log(e));

async function main() {
  
  const numeroAleatorioA = Math.floor(Math.random() * 100 + 1);
  const numeroAleatorioB = Math.floor(Math.random() * 10 + 1);
  const numeroAleatorioC = Math.floor(Math.random() * 100 + 1);
  
  const resposta = await funcNum(numeroAleatorioA, numeroAleatorioB, numeroAleatorioC)
    .catch((e) => console.log(e));
  
}

main();