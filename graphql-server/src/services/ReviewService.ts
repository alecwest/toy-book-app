import { Service } from "typedi";
import { Review } from "../models/review";
import fetch from "node-fetch";

@Service()
export class ReviewService {
  async findById(id: string): Promise<Review | undefined> {
    try {
      const response = await fetch(`http://localhost:8092/reviews/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      data["id"] = id;
      return Object.assign(new Review(), data);
    } catch {
      return;
    }
  }
}
