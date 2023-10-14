package com.alecnwest.bookstore.catalogFinder.bookfinder;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record BookCatalogResult(
        BookCatalogEmbedded _embedded
) {
}

@JsonIgnoreProperties(ignoreUnknown = true)
record BookCatalogEmbedded(
        BookCatalogBook[] books
) {}

@JsonIgnoreProperties(ignoreUnknown = true)
record BookCatalogBook(
        String title,
        String author,
        String isbn10,
        String isbn13,
        String[] genre) {}