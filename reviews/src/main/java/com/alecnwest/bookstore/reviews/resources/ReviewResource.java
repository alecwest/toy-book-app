package com.alecnwest.bookstore.reviews.resources;

import com.alecnwest.bookstore.reviews.models.ReviewItem;
import com.alecnwest.bookstore.reviews.models.Reviews;
import com.alecnwest.bookstore.reviews.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reviews")
public class ReviewResource {
    @Autowired
    private ReviewService reviewService;

    public ReviewResource() {}

    @GetMapping("/byBook/{bookId}")
    public Reviews getReviewsByBook(@PathVariable("bookId") String bookId) {
        return new Reviews(reviewService.getReviewsByBookId(bookId));
    }

    @GetMapping("/byUser/{userId}")
    public Reviews getReviewsByUser(@PathVariable("userId") String userId) {
        return new Reviews(reviewService.getReviewsByUserId(userId));
    }

    @GetMapping("/review/{reviewId}")
    public ReviewItem getReviewId(@PathVariable("reviewId") String reviewId) {
        return reviewService.getReviewById(reviewId);
    }

    @PatchMapping(value = "/review/{reviewId}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ReviewItem updateReviewById(@PathVariable("reviewId") String reviewId, @RequestBody ReviewItem updatedReview) {
        return reviewService.updateReview(reviewId, updatedReview);
    }

    @PostMapping(value = "/new", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ReviewItem createReview(@RequestBody ReviewItem newReview) {
        return reviewService.createReview(newReview);
    }

    @DeleteMapping("/review/{reviewId}")
    public void deleteReview(@PathVariable("reviewId") String reviewId) {
        reviewService.deleteReview(reviewId);
    }
}
