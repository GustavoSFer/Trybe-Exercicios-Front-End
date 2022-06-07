from abc import ABC, abstractmethod

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