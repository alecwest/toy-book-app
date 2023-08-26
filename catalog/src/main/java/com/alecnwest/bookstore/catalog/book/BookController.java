package com.alecnwest.bookstore.catalog.book;

import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


// TODO I don't think I need this because BookRepository and Book.java are just too OP???
@RestController
@RequestMapping("/books")
@NoArgsConstructor
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("/book/{bookId}")
    public Book getBook(@PathVariable("bookId") String bookId) {
        return bookService.getBookById(bookId);
    }

    @GetMapping("/search/author/{author}")
    public Books searchByAuthor(@PathVariable("author") String author) {
        return new Books(bookService.searchBooksByAuthor(author));
    }

    @GetMapping("/search/title/{title}")
    public Books searchByTitle(@PathVariable("title") String title) {
        return new Books(bookService.searchBooksByTitle(title));
    }

    @GetMapping("/search/genre/{genre}")
    public Books searchByGenre(@PathVariable("genre") String genre) {
        return new Books(bookService.getBooksByGenre(genre));
    }
}
