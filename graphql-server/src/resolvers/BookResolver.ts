import { Arg, Query, Resolver } from "type-graphql";
import { Book } from "../models/book";
import { BookService } from "../services/BookService";
import { Service } from "typedi";

export class BookNotFoundError extends Error {
  constructor(id: string) {
    super();
    this.cause = "Book not found!";
  }
}

@Service()
@Resolver(Book)
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query((returns) => Book)
  async book(@Arg("id") id: string) {
    const book = await this.bookService.findById(id);
    if (book === undefined) {
      throw new BookNotFoundError(id);
    }
    return book;
  }
}
