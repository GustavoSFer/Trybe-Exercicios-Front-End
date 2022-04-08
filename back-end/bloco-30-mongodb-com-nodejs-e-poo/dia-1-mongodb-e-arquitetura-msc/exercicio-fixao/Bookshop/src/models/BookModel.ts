import { model as createModel } from 'mongoose';
import { BookSchema, IBook } from '../schemas/BookSchema';

class BookModel {
  constructor( private bookModel = createModel<IBook>('book', BookSchema)) {}

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.find();
    return books;
  }

  public async createBook(bookData: object): Promise<IBook> {
    const book = await this.bookModel.create(bookData);
    return book;
  }

  public async getBook(id: string): Promise<IBook | null> {
    const book = await this.bookModel.findById(id); // ou
    // const book = await this.bookModel.findOne({ _id: id });
    return book;
  }

  public async editBook(id: string, bookData: object): Promise<IBook | null> {
    const book = await this.bookModel.findByIdAndUpdate({ id }, { ...bookData});  // ou
    // const book = await this.bookModel.findOneAndUpdate({ _id: id }, { ...bookData }, { new: true });
    return book;
  }

}

export default BookModel;