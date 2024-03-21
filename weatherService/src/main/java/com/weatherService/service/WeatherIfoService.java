package com.weatherService.service;

import com.weatherService.dto.WeatherData;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherIfoService {

    @Value("${openweathermap.api.key}")
    private String apiKey;

    public WeatherData getWeather(String country, String city) {
        String apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city},{country}&appid={apiKey}";

        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(apiUrl, WeatherData.class, city, country, apiKey);
    }
}
