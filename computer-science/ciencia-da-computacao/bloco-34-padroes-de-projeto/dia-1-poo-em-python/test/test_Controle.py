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