import { Service } from "typedi";
import { Book } from "../models/book";
import fetch from "node-fetch";

@Service()
export class BookService {
  async findById(id: string): Promise<Book | undefined> {
    try {
      const response = await fetch(`http://localhost:8091/books/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      data["id"] = id;
      return Object.assign(new Book(), data);
    } catch (e) {
      console.error("ERROR", e);
      return;
    }
  }
}
