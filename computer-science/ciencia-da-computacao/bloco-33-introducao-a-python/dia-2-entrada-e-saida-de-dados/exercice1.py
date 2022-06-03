# Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida
nome = input("Digite um nome: ")

for indexA in range(len(nome)):
  for indexB in range(len(nome) - indexA):
    print(nome[indexB], end="")
  print()