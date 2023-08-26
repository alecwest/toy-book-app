package com.alecnwest.bookstore.catalog.book;

import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.core.annotation.Description;

import java.util.List;

/**
 * You can get types by adding Accept: application/schema+json to the header
 * https://docs.spring.io/spring-data/rest/docs/current/reference/html/#metadata.alps
 */
@Entity
@Data
@RequiredArgsConstructor
public class Book {

    private @Id @GeneratedValue(strategy = GenerationType.UUID) String id;

    @Description("The book's title")
    private final String title;

    @Description("The book's author")
    private final String author;

    private String isbn10;

    private String isbn13;

    // ElementCollection made MEMBER OF named query possible https://stackoverflow.com/questions/2687690/jpa-2-and-hibernate-3-5-1-member-of-query-doesnt-work
    @ElementCollection
    @Description("The genres that describe the book")
    private List<String> genre;

    protected Book() {
        this(null, null);
    }
}
