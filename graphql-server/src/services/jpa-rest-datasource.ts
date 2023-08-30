import { RESTDataSource } from "@apollo/datasource-rest";

export abstract class JpaRestDataSource<T = any> extends RESTDataSource {
  abstract override baseURL;
  abstract modelName: string;

  async getItems(): Promise<T[]> {
    return this.getList(this.modelName);
  }

  async getItem(id: String): Promise<T> {
    return this.getSingle(`${this.modelName}/${id}`);
  }

  protected async getList(url: string): Promise<T[]> {
    return this.get<T>(url).then((resp) =>
      this.readJpaResults(resp, this.modelName)
    );
  }

  protected async getSingle(url: string): Promise<T> {
    const resp = await this.get<T>(url);
    return this.readJpaResult(resp);
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
