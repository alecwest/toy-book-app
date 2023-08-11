package com.alecnwest.bookstore.reviews.repositories;

import com.alecnwest.bookstore.reviews.models.ReviewItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<ReviewItem, String> {
    List<ReviewItem> findBybookId(String bookId);

    List<ReviewItem> findByuserId(String userId);
}
