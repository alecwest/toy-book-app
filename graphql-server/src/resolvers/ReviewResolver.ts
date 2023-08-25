import { Arg, Query, Resolver } from "type-graphql";
import { Review } from "../models/review";
import { ReviewService } from "../services/ReviewService";
import { Service } from "typedi";

export class ReviewNotFoundError extends Error {
  constructor(id: string) {
    super();
  }
}

@Service()
@Resolver(Review)
export class ReviewResolver {
  constructor(private ReviewService: ReviewService) {}

  @Query((returns) => Review)
  async Review(@Arg("id") id: string) {
    const Review = await this.ReviewService.findById(id);
    if (Review === undefined) {
      throw new ReviewNotFoundError(id);
    }
    return Review;
  }
}
