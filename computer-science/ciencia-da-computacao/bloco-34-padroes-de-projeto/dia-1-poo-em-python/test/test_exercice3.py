from exercice03.exercice03 import Circulo

def test_verificando_area_circulo():
  circulo = Circulo(5)
  area = circulo.area()
  assert area == 78.53981633974483


def test_verificando_perimetro_circulo():
  circulo = Circulo(5)
  area = circulo.perimetro()
  assert area == 31.41592653589793