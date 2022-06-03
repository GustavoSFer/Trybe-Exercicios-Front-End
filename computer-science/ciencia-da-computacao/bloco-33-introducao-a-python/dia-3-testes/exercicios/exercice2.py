# Em alguns lugares é comum lembrar um número do telefone associando seus dígitos a 
# letras. Dessa maneira, a expressão MY LOVE significa 69 5683. Claro que existem 
# alguns problemas, uma vez que alguns números de telefone não formam uma palavra ou 
# uma frase, e os dígitos 1 e 0 não estão associados a nenhuma letra.
# Sua tarefa é ler uma expressão e encontrar o número de telefone correspondente 
# baseado na tabela abaixo. Uma expressão é composta por letras maiúsculas (A-Z), 
# hifens (-) e os números 1 e 0.

def number_phone(frase):
  num = ""
  for letra_frase in frase:
    if letra_frase in 'ABC':
      num += '2'
    elif letra_frase in 'DEF':
      num += '3'
    elif letra_frase in 'GHI':
      num += '4'
    elif letra_frase in 'JKL':
      num += '5'
    elif letra_frase in 'MNO':
      num += '6'
    elif letra_frase in 'PQRS':
      num += '7'
    elif letra_frase in 'TUV':
      num += '8'
    elif letra_frase in 'WXYZ':
      num += '9'
    elif letra_frase in '-01':
      num += letra_frase
    else:
      print("String informado Ivalido")
    
  print(num)


number_phone('ABC')