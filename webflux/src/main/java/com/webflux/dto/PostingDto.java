package com.webflux.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;
@Data
public class PostingDto {
    private Long id;
    private String email;
    private String title;
    private String post_content;
    private LocalDateTime regTime;
}
