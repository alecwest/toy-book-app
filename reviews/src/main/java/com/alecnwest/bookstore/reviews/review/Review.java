package com.alecnwest.bookstore.reviews.review;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.NaturalId;
import org.springframework.data.rest.core.annotation.Description;

@Entity
@Data
@RequiredArgsConstructor
public class Review {
    private @Id @GeneratedValue(strategy = GenerationType.UUID) String id;

    @NaturalId
    @Description("The ID for the Book")
    private String bookId;

    @NaturalId
    private String userId;

    private String content;
    private int rating;
}
