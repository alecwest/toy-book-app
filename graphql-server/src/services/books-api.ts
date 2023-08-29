import { RESTDataSource } from "@apollo/datasource-rest";

export class BooksAPI extends RESTDataSource {
  override baseURL = "http://localhost:8091/";

  async getBooks(): Promise<any> {
    return this.get("books").then((resp) => this.readResults(resp));
  }

  async getBook(id: String): Promise<any> {
    return this.get(`books/${id}`).then((resp) => this.readResult(resp));
  }

  readResults(data): any[] {
    return data._embedded.books.map((book) => this.readResult(book));
  }

  readResult(book): any {
    book["id"] = (book["_links"]["self"]["href"] as string)
      .split("/")
      .reverse()[0];
    return book;
  }
}
