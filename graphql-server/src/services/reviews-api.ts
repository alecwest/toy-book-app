import { RESTDataSource } from "@apollo/datasource-rest";

export class ReviewsAPI extends RESTDataSource {
  override baseURL = "http://localhost:8092/";

  async getReviews(): Promise<any> {
    return this.get("reviews").then((resp) => this.readResults(resp));
  }

  async getBook(id: String): Promise<any> {
    return this.get(`reviews/${id}`).then((resp) => this.readResult(resp));
  }

  readResults(data): any[] {
    return data._embedded.reviews.map((book) => this.readResult(book));
  }

  readResult(book): any {
    book["id"] = (book["_links"]["self"]["href"] as string)
      .split("/")
      .reverse()[0];
    return book;
  }
}
