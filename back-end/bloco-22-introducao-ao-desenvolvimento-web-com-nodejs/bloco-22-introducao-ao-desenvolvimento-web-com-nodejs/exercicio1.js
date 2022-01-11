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

funcNum(10, 10, 10)
  .then((resposta) => console.log(resposta))
  .catch((error) => console.log(error));

funcNum(10, 3, 'a')
  .then((resposta) => console.log(resposta))
  .catch((err) => console.log(err));

funcNum(1, 4, 6)
  .then((resp) => console.log(resp))
  .catch((e) => console.log(e));