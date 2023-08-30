import { JpaRestDataSource } from "./jpa-rest-datasource";

export class ReviewsAPI extends JpaRestDataSource {
  baseURL = "http://localhost:8092/";
  modelName = "reviews";
}
