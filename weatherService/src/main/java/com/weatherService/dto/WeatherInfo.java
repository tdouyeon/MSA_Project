package com.weatherService.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@JsonIgnoreProperties(ignoreUnknown = true)
@Getter
@Setter
public class WeatherInfo {

    private String main;
    private String description;

    // getters and setters

    // constructors
}