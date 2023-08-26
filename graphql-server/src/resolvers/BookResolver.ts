import { Arg, Args, ArgsType, Field, Query, Resolver } from "type-graphql";
import { Book } from "../models/book";
import { BookService } from "../services/BookService";
import { Service } from "typedi";

export class BookNotFoundError extends Error {
  constructor(id: string) {
    super();
    this.cause = "Book not found!";
  }
}

@ArgsType()
export class GetBooksArgs {
  @Field({ nullable: true })
  author?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  genre?: string;
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

  @Query((returns) => [Book])
  async books(@Args() { author, title, genre }: GetBooksArgs) {
    const booksByAuthor = await this.bookService.findByAuthor(author);
    const booksByTitle = await this.bookService.findByTitle(title);
    const booksByGenre = await this.bookService.findByGenre(genre);

    return booksByAuthor
      .filter((bba) => booksByTitle.find((bbt) => bbt.id == bba.id))
      .filter((bba) => booksByGenre.find((bbg) => bbg.id == bba.id));
  }
}
