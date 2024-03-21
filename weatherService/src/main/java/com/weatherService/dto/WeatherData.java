package com.weatherService.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@JsonIgnoreProperties(ignoreUnknown = true)
@Getter
@Setter
public class WeatherData {

    private String name;
    private MainData main;
    private WeatherInfo[] weather;

    // getters and setters

    // constructors
}
