import { JpaRestDataSource } from "./jpa-rest-datasource";

export class UsersAPI extends JpaRestDataSource {
  baseURL = `http://users:8080/`;
  modelName = "users";
}
