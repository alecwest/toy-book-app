import { RESTDataSource } from "@apollo/datasource-rest";

export abstract class JpaRestDataSource<T = any> extends RESTDataSource {
  abstract override baseURL;
  abstract modelName: string;

  async getItems(): Promise<T[]> {
    return this.get<T>(this.modelName).then((resp) =>
      this.readJpaResults(resp, this.modelName)
    );
  }

  async getItem(id: String): Promise<T> {
    return this.get(`${this.modelName}/${id}`).then((resp) =>
      this.readJpaResult(resp)
    );
  }

  private readJpaResults(data, modelName: string): T[] {
    return data._embedded[modelName].map((book) => this.readJpaResult(book));
  }

  private readJpaResult(result): T {
    result["id"] = (result["_links"]["self"]["href"] as string)
      .split("/")
      .reverse()[0];
    return result;
  }
}
