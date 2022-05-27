import json

with open('exercice4.json', 'r') as livros:
  data_livros = json.load(livros)

categori = set()
for livro in data_livros:
  for categoria in livro["categories"]:
    categori.add(categoria)

#  Cada categoria vai ter um dicionario com o genero: [] vazio
livro_by_genero = { genre: [] for genre in categori }
print(livro_by_genero)
