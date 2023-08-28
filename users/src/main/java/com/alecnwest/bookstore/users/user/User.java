package com.alecnwest.bookstore.users.user;

import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.NaturalId;

@Entity
@Table(name = "users")
@Data
@RequiredArgsConstructor
public class User {
    private @Id @GeneratedValue(strategy = GenerationType.UUID) String id;

    @NaturalId
    private String username;

    private String name;
}
