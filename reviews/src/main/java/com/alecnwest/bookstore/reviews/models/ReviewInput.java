package com.alecnwest.bookstore.reviews.models;

public class ReviewInput {
    private String bookId;
    private String userId;
    private String content;
    private int rating;

    public ReviewInput() {}

    public ReviewInput(String bookId, String userId, String content, int rating) {
        this.bookId = bookId;
        this.userId = userId;
        this.content = content;
        this.rating = rating;
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
