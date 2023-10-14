package com.alecnwest.bookstore.catalog.book;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;


@Data
@RequiredArgsConstructor
public class Book {

    private String id;

    private final String title;

    private final String author;

    private String isbn10;

    private String isbn13;

    private List<String> genre;
    protected Book() {
        this(null, null);
    }
}
