# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que 
# adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá 
# uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas 
# para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando 
# se a pessoa ganhou ou perdeu o jogo.
# 🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, 
# len(word)))
# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: 
# random.choice(["word1", "word2", "word3"]) -> "word2".

import random

# Faz o sorteio de uma palavra e colocar na variavel word
word = random.choice(['melancia', 'limão', 'mexirica', 'jabuticaba']) 
# Faz o embaralho da palavra que foi sorteado
scrambled_word = "".join(random.sample(word, len(word)))
print(scrambled_word)

for index in range(1, 3):
  print(index)
  resposta[index] = input('Qual palavra é essa?\n')

for index in range(1, 3):
  if resposta[index] == word:
    print('Parabens, voce acertou')
  else:
    print('Que pena! voce errou')


    # Verificar na mentoria