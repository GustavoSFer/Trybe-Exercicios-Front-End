from exercicios.exercice3 import check_email

def test_formato_email():
  assert check_email("email@gmail.com") == 'Email valido'