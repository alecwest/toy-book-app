package com.alecnwest.bookstore.catalogFinder.bookfinder;

import com.alecnwest.bookstore.catalog.book.Book;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Service
public class BookFinderService {
    @Autowired
    private WebClient.Builder webClientBuilder;

    private List<Book> findGoogleBooks(URI uri) {
        GoogleBooksResult result = webClientBuilder
                .build()
                .get()
                .uri(uri)
                .retrieve()
                .bodyToMono(GoogleBooksResult.class)
                .block();
        List<Book> response = List.of();
        if (result != null) {
            response = Arrays.stream(result.items()).map(item -> {
                if (item.volumeInfo() != null && item.volumeInfo().title() != null && item.volumeInfo().authors() != null) {
                    GoogleBooksVolumeInfo volumeInfo = item.volumeInfo();
                    Book next = new Book(volumeInfo.title(), volumeInfo.authors()[0]);
                    for (GoogleBooksIndustryIdentifier googleBooksIndustryIdentifier : volumeInfo.industryIdentifiers()) {
                        if (Objects.equals(googleBooksIndustryIdentifier.type(), "ISBN_10")) {
                            next.setIsbn10(googleBooksIndustryIdentifier.identifier());
                        } else if (Objects.equals(googleBooksIndustryIdentifier.type(), "ISBN_13")) {
                            next.setIsbn13(googleBooksIndustryIdentifier.identifier());
                        }
                    }
                    if (volumeInfo.categories() != null) {
                        next.setGenre(Arrays.asList(volumeInfo.categories()));
                    }
                    return next;
                } else {
                    return null;
                }
            }).filter(Objects::nonNull).toList();
        }
        return response;
    }

    @SneakyThrows
    public List<Book> findBooksByAuthor(String query) {
        URI uri = UriComponentsBuilder
                .fromUriString("https://www.googleapis.com/books/v1/volumes")
                .queryParam("q", "inauthor:" + query)
                .build()
                .toUri();
        return findGoogleBooks(uri);
    }

    @SneakyThrows
    public List<Book> findBooksByTitle(String query) {
        URI uri = UriComponentsBuilder
                .fromUriString("https://www.googleapis.com/books/v1/volumes")
                .queryParam("q", "intitle:" + query)
                .build()
                .toUri();
        return findGoogleBooks(uri);
    }

    @SneakyThrows
    public List<Book> findBooksByGenre(String query) {
        URI uri = UriComponentsBuilder
                .fromUriString("https://www.googleapis.com/books/v1/volumes")
                .queryParam("q", "subject:" + query)
                .build()
                .toUri();
        return findGoogleBooks(uri);
    }
}
