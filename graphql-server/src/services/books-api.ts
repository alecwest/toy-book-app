import { JpaRestDataSource } from "./jpa-rest-datasource";

export class BooksAPI extends JpaRestDataSource {
  baseURL = `http://catalog:8080/`;
  modelName = "books";
}
