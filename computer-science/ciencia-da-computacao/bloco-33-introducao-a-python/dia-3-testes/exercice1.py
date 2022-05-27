#  Escreva um programa que retorne uma lista com os valores numéricos de 1 a N, 
# mas com as seguintes exceções:
# Números divisíveis por 3 deve aparecer como "Fizz" ao invés do número;
# Números divisíveis por 5 devem aparecer como "Buzz" ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como "FizzBuzz" ao invés do número.
# Exemplo: 3 -> [1, 2, "Fizz"].

def list_values(n):
  result = []
  for value in range(1, n + 1):
    if (value % 3 == 0 and value % 5 == 0):
      result.append("FizzBuzz")
    elif (value % 3 == 0):
      result.append("Fizz" )
    elif (value % 5 == 0):
      result.append("Buzz")
    else:
      result.append(value)
  return result

print(list_values(15))