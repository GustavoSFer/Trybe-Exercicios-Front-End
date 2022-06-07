from abc import ABC, abstractmethod
from math import pi

# ==== CLASSE ABSTRATA ====
class FiguraGeometrica(ABC):
  @abstractmethod
  def area(self):
    raise NotImplementedError

  @abstractmethod
  def perimetro(self):
    raise NotImplementedError


# ==== CRIANDO A CLASSE QUADRADO  =====
class Quadrado(FiguraGeometrica):
  def __init__(self, lado):
    self.lado = lado

  def area(self):
    return self.lado * self.lado

  def perimetro(self):
    return self.lado * 4



#  ==== CRIANDO A CLASSE RETANGULO =====
class Retangulo(FiguraGeometrica):
  def __init__(self, base, altura):
    self.base = base
    self.altura = altura
  
  def area(self):
    return self.base * self.altura

  def perimetro(self):
    return 2 * (self.base + self.altura)


#  ==== CRIANDO A CLASSE CIRCULO ====
class Circulo(FiguraGeometrica):
  def __init__(self, raio):
    self.raio = raio

  def area(self):
    return pi * (self.raio * self.raio)

  def perimetro(self):
    return 2 * pi * self.raio