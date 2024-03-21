package com.gateway.filter;

import com.gateway.service.RequestStatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.util.Objects;

@Component
public class RequestStatisticsFilter extends AbstractGatewayFilterFactory<RequestStatisticsFilter.Config> {

    private final RequestStatisticsService statisticsService;

    @Autowired
    public RequestStatisticsFilter(ApplicationContext applicationContext, RequestStatisticsService statisticsService) {
        super(Config.class);
        this.statisticsService = statisticsService;
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            long startTime = System.currentTimeMillis();
            return chain.filter(exchange).then(Mono.fromRunnable(() -> {
                long endTime = System.currentTimeMillis();
                long duration = endTime - startTime;

                exchange.getResponse().beforeCommit(() -> {
                    int statusCode = Objects.requireNonNull(exchange.getResponse().getStatusCode()).value();
                    String path = exchange.getRequest().getPath().toString();

                    // 리액티브한 saveStatistics 메서드를 호출하고 반환된 Mono를 subscribe
                    statisticsService.saveStatistics(path, statusCode, duration)
                            .subscribe();

                    return Mono.empty();
                });
            }));
        };
    }

    public static class Config {
        // 필터에 대한 구성 옵션을 정의할 수 있음
    }
}
