package com.alecnwest.bookstore.catalogFinder.bookfinder;

import com.alecnwest.bookstore.catalog.book.Book;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

interface Callback<T> {
    T call();
}

@RestController
public class BookFinderController {
    private final BookFinderService bookFinderService;

    private final BookCatalogService bookCatalogService;

    BookFinderController(BookFinderService bookFinderService, BookCatalogService bookCatalogService) {
        this.bookFinderService = bookFinderService;
        this.bookCatalogService = bookCatalogService;
    }

    @GetMapping("/findByTitle/{title}")
    String findByTitle(@PathVariable("title") String title) {
        return findBooks(
                () -> bookCatalogService.findBooksByTitle(title),
                () -> bookFinderService.findBooksByTitle(title));
    }

    @GetMapping("/findByAuthor/{author}")
    String findByAuthor(@PathVariable("author") String author) {
        return findBooks(
                () -> bookCatalogService.findBooksByAuthor(author),
                () -> bookFinderService.findBooksByAuthor(author));
    }

    @GetMapping("/findByGenre/{genre}")
    String findByGenre(@PathVariable("genre") String genre) {
        return findBooks(
                () -> bookCatalogService.findBooksByGenre(genre),
                () -> bookFinderService.findBooksByGenre(genre));
    }


    private boolean booksAlreadyInCatalog(String initialResult) {
        ObjectMapper mapper = new ObjectMapper();
        BookCatalogResult parsed = null;
        try {
            parsed = mapper.readValue(initialResult, BookCatalogResult.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        return (parsed._embedded() != null && parsed._embedded().books().length > 0);
    }

    private void addBooksToCatalog(List<Book> books) {
        for (Book book : books) {
            System.out.println("Adding book " + book.getTitle() + " " + book.getIsbn10());
            bookCatalogService.addBook(book);
        }
    }

    private String findBooks(Callback<String> bookCatalogCallback, Callback<List<Book>> bookFinderCallback) {
        String existingBooks = bookCatalogCallback.call(); // Find existing books
        System.out.println(existingBooks);
        if (booksAlreadyInCatalog(existingBooks)) {
            System.out.println("Found some books already in the catalog");
            return existingBooks;
        } else {
            System.out.println("Found no existing books in the catalog... searching elsewhere...");
            // If nothing was found, grab something from book finder
            List<Book> bookFinderResults = bookFinderCallback.call();
            // Add results to book catalog
            addBooksToCatalog(bookFinderResults);
        }
        return bookCatalogCallback.call();
    }
}
