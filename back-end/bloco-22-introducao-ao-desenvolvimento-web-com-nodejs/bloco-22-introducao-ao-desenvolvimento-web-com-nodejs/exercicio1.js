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
