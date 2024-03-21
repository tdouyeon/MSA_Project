package com.gateway.repository;

import com.gateway.model.RequestStatistics;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface RequestStatisticsRepository extends ReactiveCrudRepository<RequestStatistics, Long> {
    // 추가적인 쿼리 메서드 등이 필요하다면 여기에 추가할 수 있습니다.
}
