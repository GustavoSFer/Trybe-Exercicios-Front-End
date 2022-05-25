# Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
def quadrado(n):
  for q in range(n):
    print(n * '*')

quadrado(5)