# Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical

def nome_vertical(nome):
  for index in nome:
    print(index)

nome = input("Digite seu nome: ")
nome_vertical(nome)