import * as Exercise from './exercises';

console.log(Exercise.greeter('Gustavo'));
console.log(Exercise.personAge('Gustavo', 29));
console.log(Exercise.sumArray([2, 4, 7, 1]));
console.log(Exercise.triangle(10, 25));
console.log(Exercise.square(12));

console.log(`A area do losango: ${Exercise.losango(32, 18)} cm`);
console.log(`A area do losango: ${Exercise.losango(200, 50)} cm`);
console.log(`A area do losango: ${Exercise.losango(75, 25)} cm`);

console.log(`A area do trapézio: ${Exercise.trapezio(100, 70, 50)} cm`);
console.log(`A area do trapézio: ${Exercise.trapezio(75, 50, 35)} cm`);
console.log(`A area do trapézio: ${Exercise.trapezio(150, 120, 80)} cm`);

console.log(`A area do circulo: ${Exercise.circulo(25)} cm`);
console.log(`A area do circulo: ${Exercise.circulo(100)} cm`);
console.log(`A area do circulo: ${Exercise.circulo(12.5)} cm`);

