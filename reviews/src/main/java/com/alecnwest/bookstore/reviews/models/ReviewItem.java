package com.alecnwest.bookstore.reviews.models;

public class ReviewItem extends ReviewInput {
    private String reviewId;

    public ReviewItem() {
        super();
    }

    public ReviewItem(String reviewId, ReviewInput reviewInput) {
        super(reviewInput.getBookId(), reviewInput.getUserId(), reviewInput.getContent(), reviewInput.getRating());
        this.reviewId = reviewId;
    }

    public ReviewItem(String reviewId, String bookId, String userId, String content, int rating) {
        super(bookId, userId, content, rating);
        this.reviewId = reviewId;
    }

    public String getReviewId() {
        return reviewId;
    }

    public void setReviewId(String reviewId) {
        this.reviewId = reviewId;
    }
}
