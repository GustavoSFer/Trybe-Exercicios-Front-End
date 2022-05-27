# Faça uma função que valide um e-mail, lançando uma exceção quando o valor for inválido. Endereços de e-mail válidos devem seguir as seguintes regras:
# Devem seguir o formato nomeusuario@nomewebsite.extensao;
# O nome de usuário deve conter somente letras, dígitos, traços e underscores (_);
# O nome de usuário deve iniciar com uma letra;
# O nome do website deve conter somente letras e dígitos;
# O tamanho máximo da extensão é de 3 caracteres.
# 🦜 As funções isalpha e isdigit podem ser utilizadas para verificar se uma letra ou palavra são compostas de somente caracteres ou dígitos. Exemplo: "1".isaplha() -> False , "a".isalpha() -> True.

import re
regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'

def check_email(email):
  if email[0].isalpha():
    if (re.search(regex, email)):
      print('Email valido')
      return True
    else:
      print("Email invalidoo!")
      return False
  else:
    print('O nome de usuário deve iniciar com uma letra')

check_email('hsua@hdiadss.com')