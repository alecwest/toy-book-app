package com.alecnwest.bookstore.catalog.book;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, String> {
     // table 2.3 at https://docs.spring.io/spring-data/jpa/docs/1.6.0.RELEASE/reference/html/jpa.repositories.html
    List<Book> findByAuthorLike(String author);

     // table 2.3 at https://docs.spring.io/spring-data/jpa/docs/1.6.0.RELEASE/reference/html/jpa.repositories.html
    List<Book> findByTitleLike(String title);

    List<Book> findByGenre(String genre);
}
