import { JpaRestDataSource } from "./jpa-rest-datasource";

export interface ReviewInput {
  rating: number;
  content: string;
}

export interface CreateReviewInput extends ReviewInput {
  bookId: string;
  userId: string;
}

export interface EditReviewInput extends ReviewInput {
  reviewId: string;
}

export class ReviewsAPI extends JpaRestDataSource {
  baseURL = `http://reviews:8080/`;
  modelName = "reviews";

  findByUser(userId: string): Promise<any> {
    return this.getList(
      `${this.modelName}/search/findByUserId?userId=${encodeURIComponent(
        userId
      )}`
    );
  }

  findByBook(bookId: string): Promise<any> {
    return this.getList(
      `${this.modelName}/search/findByBookId?bookId=${encodeURIComponent(
        bookId
      )}`
    );
  }

  createReview(input: CreateReviewInput) {
    return this.post(`${this.modelName}`, { body: input }).then(
      this.readJpaResult
    );
  }

  editReview(input: EditReviewInput) {
    return this.patch(`${this.modelName}/${input.reviewId}`, {
      body: { rating: input.rating, content: input.content } as ReviewInput,
    }).then(this.readJpaResult);
  }

  deleteReview(reviewId: string) {
    return this.delete(`${this.modelName}/${reviewId}`).then(
      this.readJpaResult
    );
  }
}
