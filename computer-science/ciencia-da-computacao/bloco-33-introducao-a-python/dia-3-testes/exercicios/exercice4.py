# Baseado no exercício anterior, escreva uma função que, dado uma lista de emails, deve retornar somente os emails válidos. Caso uma exceção ocorra, apenas a escreva na tela.
# Exemplo: ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"] -> ["nome@dominio.com", "outro@dominio.com"].

from exercice3 import check_email

def lista_emais(emails):
  email_certo = []
  for email in emails:
    verify = check_email(email)
    if verify :
      email_certo.append(email)

  return email_certo

print(lista_emais(["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]))