import json

with open('exercice4.json', 'r') as livros:
  data_livros = json.load(livros)

categori = set()
for livro in data_livros:
  for categoria in livro["categories"]:
    categori.add(categoria)

#  Cada categoria vai ter um dicionario com o genero: [] vazio
livro_by_genero = { genre: [] for genre in categori }
print(livro_by_genero)



###################################################


def retrieve_books(file):
    return json.load(file)



def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_porcentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    # retrieve books
    with open("books.json") as file:
        books = retrieve_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)

    # calculate porcentage
    number_of_books = len(books)
    books_percentage_rows = calculate_porcentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    header = ["categoria", "porcentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)