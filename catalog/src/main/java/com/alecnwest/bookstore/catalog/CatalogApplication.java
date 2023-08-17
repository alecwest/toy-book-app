package com.alecnwest.bookstore.catalog;

import com.alecnwest.bookstore.catalog.book.BookRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@EnableJpaRepositories
public class CatalogApplication {

	private static final Logger log = LoggerFactory.getLogger(CatalogApplication.class);

	@Autowired
	BookRepository bookRepository;

	public static void main(String[] args) {
		SpringApplication.run(CatalogApplication.class, args);
	}

}
