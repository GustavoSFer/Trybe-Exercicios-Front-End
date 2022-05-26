# Escreva um programa que receba vários números naturais e calcule a soma desses 
# valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), 
# uma mensagem deve ser exibida na saída de erros no seguinte formato: 
# "Erro ao somar valores, {valor} é um valor inválido". Ao final, você deve imprimir 
# a soma dos valores válidos.

def soma_numeros(numeros):
  list_numeros = numeros.split(" ")
  soma = 0
  for n in list_numeros:
    if n.isdigit():
      soma += int(n)
    else:
      print(f"Erro ao somar valores, {n} não é um dígito.")
    
  return soma

valor = input("Digite uma sequencia de numero separando com espaço: ")
print(soma_numeros(valor))