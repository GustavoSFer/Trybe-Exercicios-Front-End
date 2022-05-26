# Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo", caso não seja possível formar um triângulo.

def triangulo(a, b, c):
  if (a + b) > c:
    if a == b and b == c:
      return 'Triângulo Equilátero'
    if a == b or b == c or a == c:
      return 'Triângulo Isósceles'
    if a != b and b != c and a != c:
      return 'Triângulo Escaleno'
    return 'não é triangulo'

print(triangulo(12,42,2))