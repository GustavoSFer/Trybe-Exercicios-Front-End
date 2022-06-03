class Tv():
  def __init__(self, tamanho):
    self._volume = 50
    self._canal = 1
    self._tamanho = tamanho
    self._ligada = False

  def aumentar_volume(self):
    try:
      if self._volume <= 99 and self._volume >= 0:
        self._volume += 1
    except ValueError():
      print('Não pode ser alterado o volume')

  
  def diminuir_volume(self):
    try:
      if self._volume <= 99 and self._volume >= 0:
        self._volume -= 1
    except ValueError():
      print('Não pode ser alterado o volume')


  def modificar_canal(self, canal):
    if canal <= 99 and canal >= 1:
      self._canal = canal

  
  def ligar_desligar(self):
    if self._ligada:
      self._ligada = False
    else:
      self._ligada = True


  def get_volume(self):
    return self._volume

  def get_canal(self):
    return self._canal

  def get_ligar_and_desligar(self):
    return self._ligada