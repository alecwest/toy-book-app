package com.alecnwest.bookstore.reviews.models;

import java.util.List;

public class Reviews {
    private List<ReviewItem> reviews;

    public Reviews() {}

    public Reviews(List<ReviewItem> reviews) {
        this.reviews = reviews;
    }

    public List<ReviewItem> getReviews() {
        return reviews;
    }

    public void setReviews(List<ReviewItem> reviews) {
        this.reviews = reviews;
    }
}
