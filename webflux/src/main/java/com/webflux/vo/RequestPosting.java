package com.webflux.vo;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;

@Data
public class RequestPosting {
    private String email;
    private String title;
    private String post_content;
}
