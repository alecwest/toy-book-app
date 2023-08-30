import { JpaRestDataSource } from "./jpa-rest-datasource";

export class BooksAPI extends JpaRestDataSource {
  baseURL = "http://localhost:8091/";
  modelName = "books";
}
