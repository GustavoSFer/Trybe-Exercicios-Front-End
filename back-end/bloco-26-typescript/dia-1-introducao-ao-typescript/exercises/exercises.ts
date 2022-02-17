// Função que mostra o nome da pessoa
export function greeter(name: string) {
  return `Olá ${name}!`;
}

// Função que mostra o nome e a idade da pessoa
export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

// Função que mostra a soma dos valores dentro de um array
function add(x: number, y: number): number {
  return x + y;
}
export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

// Função para calcular a area do triangulo
export function triangle(a: number, b: number): number {
  return (b * a) / 2;
}

// Função para calcular a area de um quadrado
export function square(a: number): number {
  return a ** 2;
}

// Função para calcular a area de um retangulo
export function rectangle(a: number, b: number): number {
  return a * b;
}

// Função para calcular a área do losango
export function losango(D: number, d: number): number {
  return (D * d) / 2;
}

// Função para calcular a área do trapézio
export function trapezio(B: number, b: number, h: number): number {
  return ((B + b) * h) / 2;
}

// Função para calcular a área do círculo
export function circulo(r: number): number {
  const PI = 3.14;
  return (PI * (r ** 2));
}