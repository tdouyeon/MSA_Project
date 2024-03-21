package com.webflux.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Entity
@Data
public class Posting {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String email;
    private String title;
    @Lob
    private String post_content;
    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime regTime;
}
