package com.alecnwest.bookstore.reviews.resources;

import com.alecnwest.bookstore.reviews.models.ReviewInput;
import com.alecnwest.bookstore.reviews.models.Reviews;
import com.alecnwest.bookstore.reviews.models.ReviewItem;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/reviews")
public class ReviewResource {
    private final List<ReviewItem> database = new ArrayList<>();

    public ReviewResource() {
        database.add(new ReviewItem("321", "123", "awest", "Lorem Ipsum", 3));
    }

    @GetMapping("/byBook/{bookId}")
    public Reviews getReviewsByBook(@PathVariable("bookId") String bookId) {
        return new Reviews(database.stream().filter((reviewItem -> Objects.equals(reviewItem.getBookId(), bookId))).toList());
    }

    @GetMapping("/byUser/{userId}")
    public Reviews getReviewsByUser(@PathVariable("userId") String userId) {
        return new Reviews(database.stream().filter((reviewItem -> Objects.equals(reviewItem.getUserId(), userId))).toList());
    }

    @PostMapping(value = "/new", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ReviewItem createReview(@RequestBody ReviewInput newReview) {
        ReviewItem newReviewItem = new ReviewItem(UUID.randomUUID().toString(), newReview);
        database.add(newReviewItem);
        return newReviewItem;
    }
}
