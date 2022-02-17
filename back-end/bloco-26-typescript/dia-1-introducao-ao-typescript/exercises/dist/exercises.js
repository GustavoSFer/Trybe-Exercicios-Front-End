"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circulo = exports.trapezio = exports.losango = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.personAge = exports.greeter = void 0;
// Função que mostra o nome da pessoa
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
// Função que mostra o nome e a idade da pessoa
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
// Função que mostra a soma dos valores dentro de um array
function add(x, y) {
    return x + y;
}
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
// Função para calcular a area do triangulo
function triangle(a, b) {
    return (b * a) / 2;
}
exports.triangle = triangle;
// Função para calcular a area de um quadrado
function square(a) {
    return a ** 2;
}
exports.square = square;
// Função para calcular a area de um retangulo
function rectangle(a, b) {
    return a * b;
}
exports.rectangle = rectangle;
// Função para calcular a área do losango
function losango(D, d) {
    return (D * d) / 2;
}
exports.losango = losango;
// Função para calcular a área do trapézio
function trapezio(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.trapezio = trapezio;
// Função para calcular a área do círculo
function circulo(r) {
    const PI = 3.14;
    return (PI * (r ** 2));
}
exports.circulo = circulo;
