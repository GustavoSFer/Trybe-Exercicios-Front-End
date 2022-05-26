# Crie uma função que receba um número inteiro N e retorne o somatório de todos os 
# números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15.

def somatorio(n):
    total = 0
    for numero in range(1, n + 1):
      total += numero
    return total

print(somatorio(5))