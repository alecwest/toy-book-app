package com.alecnwest.bookstore.catalogFinder.bookfinder;

import com.alecnwest.bookstore.catalog.book.Book;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;

@Service
public class BookCatalogService {

    @Autowired
    private RestTemplate restTemplate;

    @SneakyThrows
    public String findBooksByAuthor(String query) {
        URI uri = UriComponentsBuilder
                .fromUriString("http://localhost:8080/books/search/findByAuthorContainingIgnoreCase")
                .queryParam("author", query)
                .build()
                .toUri();
        return restTemplate.getForObject(uri, String.class);
    }

    @SneakyThrows
    public String findBooksByTitle(String query) {
        URI uri = UriComponentsBuilder
                .fromUriString("http://localhost:8080/books/search/findByTitleContainingIgnoreCase")
                .queryParam("title", query)
                .build()
                .toUri();
        return restTemplate.getForObject(uri, String.class);
    }

    @SneakyThrows
    public String findBooksByGenre(String query) {
        URI uri = UriComponentsBuilder
                .fromUriString("http://localhost:8080/books/search/findByGenre")
                .queryParam("genre", query)
                .build()
                .toUri();
        return restTemplate.getForObject(uri, String.class);
    }

    public Book addBook(Book book) {
        try {
            URI uri = new URI("http://localhost:8080/books");
            return restTemplate.postForObject(uri, book, Book.class);
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }
}
