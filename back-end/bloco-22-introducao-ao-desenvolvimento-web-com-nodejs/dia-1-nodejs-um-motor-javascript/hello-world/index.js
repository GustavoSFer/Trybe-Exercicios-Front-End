const readline = require('readline-sync');

const name = readline.question('Informe seu nome: ');
const age = readline.questionInt('informe sua idade: ');

console.log(`Olá ${name}, voce tem ${age} anos!!!`);
// console.log('Hello, world!');
