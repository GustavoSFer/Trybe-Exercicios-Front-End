from eletrodomestico.tv import Tv

def test_create_Tv():
  tv = Tv(32)
  
  assert tv._volume == 50
  assert tv._canal == 1
  assert tv._ligada == False

def test_aumentar_volume():
  tv = Tv(50)
  tv.aumentar_volume()
  volume = tv.get_volume()

  assert volume == 51

def test_diminuir_volume():
  tv = Tv(65)
  tv.diminuir_volume()
  volume = tv.get_volume()

  assert volume == 49


def test_modificar_canal():
  tv = Tv(32)
  tv.modificar_canal(5)
  canal = tv.get_canal()

  assert canal == 5