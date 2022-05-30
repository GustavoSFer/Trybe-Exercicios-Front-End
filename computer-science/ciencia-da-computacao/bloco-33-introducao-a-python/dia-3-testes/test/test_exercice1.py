from exercicios.exercice1 import list_values


def test_retorna_array_numero():
  assert list_values(2) == [1, 2]
  

def test_retorna_Fizz():
  assert list_values(3)[-1] == 'Fizz'


def test_retorna_Buzz():
  assert list_values(5)[-1] == 'Buzz'


def test_retorna_FizzBuzz():
  assert list_values(15)[-1] == 'FizzBuzz'