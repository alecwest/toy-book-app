package com.alecnwest.bookstore.catalog.book;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, String> {
    // table 2.3 at https://docs.spring.io/spring-data/jpa/docs/1.6.0.RELEASE/reference/html/jpa.repositories.html
    List<Book> findByAuthorContainingIgnoreCase(String author);

    // table 2.3 at https://docs.spring.io/spring-data/jpa/docs/1.6.0.RELEASE/reference/html/jpa.repositories.html
    List<Book> findByTitleContainingIgnoreCase(String title);

    @Query("from Book where ?1 MEMBER OF genre")
    List<Book> findByGenre(String genre);
}
