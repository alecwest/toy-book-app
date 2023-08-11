package com.alecnwest.bookstore.reviews.services;

import com.alecnwest.bookstore.reviews.models.ReviewItem;
import com.alecnwest.bookstore.reviews.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    public ReviewItem createReview(ReviewItem reviewItem) {
        return reviewRepository.save(reviewItem);
    }

    public List<ReviewItem> getAllReviews() {
        return reviewRepository.findAll();
    }

    public ReviewItem getReviewById(String id) {
        return reviewRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
    }

    public List<ReviewItem> getReviewsByUserId(String userId) {
        return reviewRepository.findByuserId(userId);
    }

    public List<ReviewItem> getReviewsByBookId(String bookId) {
        return reviewRepository.findBybookId(bookId);
    }

    public ReviewItem updateReview(String id, ReviewItem reviewDetails) {
        ReviewItem existingReview = getReviewById(id);
        existingReview.setContent(reviewDetails.getContent());
        existingReview.setRating(reviewDetails.getRating());
        return reviewRepository.save(existingReview);
    }

    public void deleteReview(String id) {
        reviewRepository.deleteById(id);
    }
}
