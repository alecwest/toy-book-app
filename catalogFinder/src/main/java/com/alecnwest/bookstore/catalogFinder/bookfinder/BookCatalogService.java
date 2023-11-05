package com.alecnwest.bookstore.catalogFinder.bookfinder;

import com.alecnwest.bookstore.catalog.book.Book;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.BodyInserter;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;

@Service
public class BookCatalogService {

    @Autowired
    private WebClient.Builder webClientBuilder;

    @SneakyThrows
    public String findBooksByAuthor(String query) {
        URI uri = UriComponentsBuilder
                .fromUriString("http://catalog:8080/books/search/findByAuthorContainingIgnoreCase")
                .queryParam("author", query)
                .build()
                .toUri();
        return webClientBuilder.build().get().uri(uri).retrieve().bodyToMono(String.class).block();
    }

    @SneakyThrows
    public String findBooksByTitle(String query) {
        URI uri = UriComponentsBuilder
                .fromUriString("http://catalog:8080/books/search/findByTitleContainingIgnoreCase")
                .queryParam("title", query)
                .build()
                .toUri();
        return webClientBuilder.build().get().uri(uri).retrieve().bodyToMono(String.class).block();
    }

    @SneakyThrows
    public String findBooksByGenre(String query) {
        URI uri = UriComponentsBuilder
                .fromUriString("http://catalog:8080/books/search/findByGenre")
                .queryParam("genre", query)
                .build()
                .toUri();
        return webClientBuilder.build().get().uri(uri).retrieve().bodyToMono(String.class).block();
    }

    public Book addBook(Book book) {
        try {
            URI uri = new URI("http://catalog:8080/books");
            return webClientBuilder.build().post().uri(uri).bodyValue(book).retrieve().bodyToMono(Book.class).block();
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }
}
