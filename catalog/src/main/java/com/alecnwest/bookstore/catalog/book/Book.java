package com.alecnwest.bookstore.catalog.book;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Entity
@Data
@RequiredArgsConstructor
public class Book {

    private @Id @GeneratedValue(strategy = GenerationType.UUID) String id;
    private final String title;
    private final String author;

    private String isbn10;

    private String isbn13;

    private List<String> genre;

    protected Book() {
        this(null, null);
    }
}
