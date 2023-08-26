package com.alecnwest.bookstore.reviews.review;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, String> {
    List<Review> findByBookId(String bookId);

    List<Review> findByUserId(String userId);

    List<Review> findByRating(int rating);

    @Query("select r from Review r where r.content like %?1%")
    List<Review> findByContent(String content);
}
