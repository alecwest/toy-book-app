package com.alecnwest.bookstore.catalogFinder.bookfinder;

import com.alecnwest.bookstore.catalog.book.Book;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Service
public class BookFinderService {
    @Autowired
    private RestTemplate restTemplate;

    private List<Book> findGoogleBooks(URI uri) {
        ResponseEntity<GoogleBooksResult> googleBooksResultResponseEntity = restTemplate.getForEntity(uri, GoogleBooksResult.class);
        GoogleBooksResult result = googleBooksResultResponseEntity.getBody();
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
