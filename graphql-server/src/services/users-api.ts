import { RESTDataSource } from "@apollo/datasource-rest";

export class UsersAPI extends RESTDataSource {
  override baseURL = "http://localhost:8093/";

  async getUsers(): Promise<any> {
    return this.get("users").then((resp) => this.readResults(resp));
  }

  async getBook(id: String): Promise<any> {
    return this.get(`users/${id}`).then((resp) => this.readResult(resp));
  }

  readResults(data): any[] {
    return data._embedded.users.map((book) => this.readResult(book));
  }

  readResult(book): any {
    book["id"] = (book["_links"]["self"]["href"] as string)
      .split("/")
      .reverse()[0];
    return book;
  }
}
