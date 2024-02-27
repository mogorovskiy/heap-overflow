package com.kk.heapoverflow.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.*;

@Entity
@Getter
@Setter
public class User extends BaseModel {
    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;
}
