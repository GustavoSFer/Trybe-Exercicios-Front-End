// const arrayId = ['1', '2', '4', '5', '64', '65', '7', '9', 'h', 'k', 's', 'a', 'i', 'b', 'c', 'd'];

// function getRandomInt(min: number, max: number): number {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// let id = '';
// arrayId.forEach((item) => {
//   const num = getRandomInt(0, arrayId.length - 1);
//   const numSorteado = item.indexOf(num);
//   id += num;

//   return id;
// });

const teste = Math.floor(Date.now() * Math.random()).toString(36);
console.log(teste);