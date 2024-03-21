package com.gateway.service;

import com.gateway.model.RequestStatistics;
import com.gateway.repository.RequestStatisticsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;

@Service
public class RequestStatisticsService {

    private final RequestStatisticsRepository repository;

    @Autowired
    public RequestStatisticsService(RequestStatisticsRepository repository) {
        this.repository = repository;
    }

    public Mono<RequestStatistics> saveStatistics(String path, int statusCode, long duration) {
        RequestStatistics statistics = new RequestStatistics();
        statistics.setPath(path);
        statistics.setStatusCode(statusCode);
        statistics.setDuration(duration);
        statistics.setTimestamp(LocalDateTime.now());
        return repository.save(statistics);
    }

    public Flux<RequestStatistics> getAllStatistics() {
        return repository.findAll();
    }
}
