package com.alecnwest.bookstore.catalog.book;

import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Entity
@Data
@RequiredArgsConstructor
@NamedQuery(name = "Book.findByGenre", query = "from Book where ?1 MEMBER OF genre")
public class Book {

    private @Id @GeneratedValue(strategy = GenerationType.UUID) String id;
    private final String title;
    private final String author;

    private String isbn10;

    private String isbn13;

    // ElementCollection made MEMBER OF named query possible https://stackoverflow.com/questions/2687690/jpa-2-and-hibernate-3-5-1-member-of-query-doesnt-work
    @ElementCollection
    private List<String> genre;

    protected Book() {
        this(null, null);
    }
}
