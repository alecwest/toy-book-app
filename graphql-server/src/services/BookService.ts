import { Service } from "typedi";
import { Book } from "../models/book";
import fetch, { RequestInit } from "node-fetch";

class BooksResponse {
  _embedded: { books: Book[] };
  _links: { self: { href: string } };
}

@Service()
export class BookService {
  url = "http://localhost:8091/books/";
  searchUrl = `${this.url}search/`;

  requestInfo: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  async findById(id: string): Promise<Book | undefined> {
    try {
      const response = await fetch(
        `http://localhost:8091/books/${id}`,
        this.requestInfo
      );
      const data = await response.json();
      data["id"] = id;
      return Object.assign(new Book(), data);
    } catch (e) {
      console.error("ERROR", e);
      return;
    }
  }

  async findByAuthor(author: string): Promise<Book[] | undefined> {
    try {
      const response = await fetch(
        `${this.searchUrl}findByAuthorContainingIgnoreCase?author=${author}`,
        this.requestInfo
      );
      const data = await response.json();
      console.log("FIND BY AUTHOR");
      return this.readResults(data);
    } catch (e) {
      console.error("ERROR", e);
      return;
    }
  }

  async findByTitle(title: string): Promise<Book[] | undefined> {
    try {
      const response = await fetch(
        `${this.searchUrl}findByTitleContainingIgnoreCase?title=${title}`,
        this.requestInfo
      );
      console.log("FIND BY TITLE");
      const data = await response.json();
      return this.readResults(data);
    } catch (e) {
      console.error("ERROR", e);
      return;
    }
  }

  async findByGenre(genre: string): Promise<Book[] | undefined> {
    try {
      const response = await fetch(
        `${this.searchUrl}findByGenre?genre=${genre}`,
        this.requestInfo
      );
      const data = await response.json();
      console.log("FIND BY GENRE");
      return this.readResults(data);
    } catch (e) {
      console.error("ERROR", e);
      return;
    }
  }

  private readResults(data: BooksResponse): Book[] {
    return data._embedded.books.map((book) => {
      console.log(book);
      const newBook = Object.assign(new Book(), book);
      newBook.id = (book["_links"]["self"]["href"] as string)
        .split("/")
        .reverse()[0];
      return newBook;
    });
  }
}
