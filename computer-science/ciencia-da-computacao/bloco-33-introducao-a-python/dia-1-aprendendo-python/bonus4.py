# Um posto está vendendo combustíveis com a seguinte tabela de descontos:
#   Álcool:
  #   - Até 20 litros, desconto de 3% por litro;
  #   - Acima de 20 litros, desconto de 5% por litro.
  # Gasolina:
  #   - Até 20 litros, desconto de 4% por litro;
  #   - Acima de 20 litros, desconto de 6% por litro.
  # Escreva uma função que receba o número de litros vendidos, o tipo de combustível 
  # (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser 
  # pago pelo cliente, sabendo-se que o preço do litro da gasolina é 
  # R$ 2,50, e o preço do litro do álcool é R$ 1,90.

def combustivel(l, tipo):
  if tipo == "G":
    preco = 2.5
    desconto = 0.04
    if l > 20:
      desconto = 0.06
  if tipo == "A":
    preco = 1.9
    desconto = 0.03
    if l > 20:
      desconto = 0.05

    total = l * preco
    total -= total * desconto
    return total

print(combustivel(21, "A"))