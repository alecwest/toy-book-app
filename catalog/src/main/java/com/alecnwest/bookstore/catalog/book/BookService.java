package com.alecnwest.bookstore.catalog.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

// TODO I don't think I need this because BookRepository and Book.java are just too OP???
@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    public Book getBookById(String id) {
        return bookRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
    }

    public List<Book> searchBooksByAuthor(String author) {
        return bookRepository.findByAuthorLike(author);
    }

    public List<Book> searchBooksByTitle(String title) {
        return bookRepository.findByTitleLike(title);
    }

    public List<Book> getBooksByGenre(String genre) {
        return bookRepository.findByGenre(genre);
    }
}
