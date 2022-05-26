# Calcule a média aritmética dos valores contidos em uma lista.

def main(number):
  total = 0

  for valores in number:
    total += valores

  return total / len(number)


print(main([1, 4, 6, 8, 9, 12, 43]))