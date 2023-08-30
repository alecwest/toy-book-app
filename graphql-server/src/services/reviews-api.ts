import { JpaRestDataSource } from "./jpa-rest-datasource";

export class ReviewsAPI extends JpaRestDataSource {
  baseURL = "http://localhost:8092/";
  modelName = "reviews";

  findByUser(userId: string): Promise<any> {
    return this.getList(
      `${this.modelName}/search/findByUserId?userId=${encodeURIComponent(
        userId
      )}`
    );
  }

  findByBook(bookId: string): Promise<any> {
    return this.getList(
      `${this.modelName}/search/findByBookId?bookId=${encodeURIComponent(
        bookId
      )}`
    );
  }
}
