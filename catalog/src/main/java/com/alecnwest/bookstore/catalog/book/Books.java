package com.alecnwest.bookstore.catalog.book;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

// TODO I don't think I need this because BookRepository and Book.java are just too OP???
@Data
@AllArgsConstructor
public class Books {
    private List<Book> books;
}
