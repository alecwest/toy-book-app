package com.alecnwest.bookstore.catalog.book;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, String> {
    // used % signs to get partial matches https://www.postgresql.org/docs/9/functions-matching.html
    // table 2.3 at https://docs.spring.io/spring-data/jpa/docs/1.6.0.RELEASE/reference/html/jpa.repositories.html
    @Query("select b from Book b where b.author like %?1%")
    List<Book> findByAuthor(String author);


    // used % signs to get partial matches https://www.postgresql.org/docs/9/functions-matching.html
    // table 2.3 at https://docs.spring.io/spring-data/jpa/docs/1.6.0.RELEASE/reference/html/jpa.repositories.html
    @Query("select b from Book b where b.title like %?1%")
    List<Book> findByTitle(String title);

    @Query("from Book where ?1 MEMBER OF genre")
    List<Book> findByGenre(String genre);
}
