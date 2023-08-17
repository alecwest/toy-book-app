package com.alecnwest.bookstore.catalog.book;

import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, String> {}
