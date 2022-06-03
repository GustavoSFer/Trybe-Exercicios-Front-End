from eletrodomestico.tv import Tv

def test_create_Tv():
  tv = Tv(32)
  
  assert tv.volume == 50
  assert tv.canal == 1
  assert tv.ligada == False