package com.alecnwest.bookstore.reviews.models;

import jakarta.persistence.*;
import org.hibernate.annotations.NaturalId;

@Entity
@Table(name = "reviews")
public class ReviewItem {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String reviewId;

    @NaturalId
    private String bookId;

    @NaturalId
    private String userId;

    private String content;
    private int rating;

    public ReviewItem() {
    }

    public ReviewItem(String bookId, String userId, String content, int rating) {
        this.bookId = bookId;
        this.userId = userId;
        this.content = content;
        this.rating = rating;
    }

    public ReviewItem(String reviewId, String bookId, String userId, String content, int rating) {
        this.reviewId = reviewId;
        this.bookId = bookId;
        this.userId = userId;
        this.content = content;
        this.rating = rating;
    }


    public String getReviewId() {
        return reviewId;
    }

    public void setReviewId(String reviewId) {
        this.reviewId = reviewId;
    }


    public String getBookId() {
        return bookId;
    }

    public void setBookId(String bookId) {
        this.bookId = bookId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
