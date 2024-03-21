package com.weatherService.service;

import com.weatherService.dto.CityDto;
import com.weatherService.dto.CountryDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {
    public List<CountryDto> getAllCountries() {
        // 나라 목록을 가져오는 로직
        // 실제 데이터베이스 또는 외부 API에서 데이터를 가져와야 합니다.
        // 여기서는 가상의 데이터로 대체합니다.

        return List.of(new CountryDto("Korea"), new CountryDto("USA"), new CountryDto("Japan"));
    }

    public List<CityDto> getCitiesByCountry(String country) {
        // 선택된 나라에 해당하는 도시 목록을 가져오는 로직
        // 실제 데이터베이스 또는 외부 API에서 데이터를 가져와야 합니다.
        // 여기서는 가상의 데이터로 대체합니다.
        if ("Korea".equals(country)) {
            return List.of(new CityDto("Seoul"), new CityDto("Busan"), new CityDto("Incheon"));
        } else if ("USA".equals(country)) {
            return List.of(new CityDto("New York"), new CityDto("Los Angeles"), new CityDto("Chicago"));
        } else if ("Japan".equals(country)) {
            return List.of(new CityDto("Tokyo"), new CityDto("Osaka"), new CityDto("Kyoto"));
        } else {
            return List.of(); // 나라에 해당하는 도시 목록이 없는 경우
        }
    }
}
