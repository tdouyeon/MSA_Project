package com.gateway.controller;

import com.gateway.model.RequestStatistics;
import com.gateway.service.RequestStatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import reactor.core.publisher.Flux;

@Controller
@RequestMapping("/api")
public class StatisticsController {

    private final RequestStatisticsService statisticsService;

    @Autowired
    public StatisticsController(RequestStatisticsService statisticsService) {
        this.statisticsService = statisticsService;
    }

    @GetMapping("/statistics")
    public String showStatistics(Model model) {
        return "statistics";
    }

    @GetMapping(value = "/statistics", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Flux<RequestStatistics> getStatistics() {
        return statisticsService.getAllStatistics();
    }
}
