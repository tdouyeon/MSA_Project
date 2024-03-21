package com.weatherService.controller;

import com.weatherService.dto.CityDto;
import com.weatherService.dto.CountryDto;
import com.weatherService.dto.WeatherData;
import com.weatherService.service.LocationService;
import com.weatherService.service.WeatherIfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class WeatherServiceController {

    private final WeatherIfoService weatherIfoService;
    private final LocationService locationService;

    @GetMapping("/get")
    public ResponseEntity<?> getWeather(@RequestParam(name = "country") String country, @RequestParam(name = "city") String city) {
        WeatherData weatherData = weatherIfoService.getWeather(country, city);
        return ResponseEntity.ok(weatherData);
    }

    @GetMapping("/countries")
    public ResponseEntity<?> getAllCountries() {
        List<CountryDto> countryDtoList = locationService.getAllCountries();
        return ResponseEntity.ok(countryDtoList);
    }

    @GetMapping("/cities/{country}")
    public ResponseEntity<?> getCitiesByCountry(@PathVariable(name = "country") String country) {
        List<CityDto> cityDtoList = locationService.getCitiesByCountry(country);
        return ResponseEntity.ok(cityDtoList);
    }
}
