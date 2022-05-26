# Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

def maior_nome(nomes):
  maior = ''
  for nome in nomes:
    if len(nome) > len(maior):
      maior = nome
  return maior

print(maior_nome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))