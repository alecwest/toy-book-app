import { JpaRestDataSource } from "./jpa-rest-datasource";

export class UsersAPI extends JpaRestDataSource {
  baseURL = "http://localhost:8093/";
  modelName = "users";
}
