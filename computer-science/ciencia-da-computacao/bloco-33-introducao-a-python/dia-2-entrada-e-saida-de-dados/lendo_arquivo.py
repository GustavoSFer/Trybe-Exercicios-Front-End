# Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que:
# 1. lê todas essas informações;
# 2. aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# 3. escreva seus nomes em outro arquivo.
estudantes_reptovador = []
with open('arquivo.txt') as file:
  for line in file:
    pessoa = line
    pessoa_lista = pessoa.split(" ")
    if int(pessoa_lista[1]) < 6:
      estudantes_reptovador.append(pessoa_lista[0] + '\n')

with open('arquivo_pessoa_reprovado.txt', 'w') as repro:
  repro.writelines(estudantes_reptovador)