package com.gateway.model;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;

@Table("request_statistics")
@Data
public class RequestStatistics {
    @Id
    private Long id;
    private String path;
    private int statusCode;
    private long duration;
    @CreatedDate
    private LocalDateTime timestamp;
}
