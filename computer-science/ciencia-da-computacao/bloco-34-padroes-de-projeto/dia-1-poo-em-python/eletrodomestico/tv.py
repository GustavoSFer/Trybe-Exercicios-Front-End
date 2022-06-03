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

  def get_volume(self):
    return self._volume