import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getWeather } from "../utils/WeatherData";

const WeatherInfo = ({ route }) => {
  const [weatherData, setWeatherData] = useState(null);
  const { city, country } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeather(city, country);
        // 켈빈을 섭씨로 변환
        data.main.temp = (data.main.temp - 273.15).toFixed(2);
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [city, country]);

  return (
    <View style={styles.container}>
      {weatherData && (
        <View style={styles.weatherContainer}>
          <Text style={styles.city}>{weatherData.name}</Text>
          <Text style={styles.temperature}>{weatherData.main.temp} ℃</Text>
          <Text style={styles.description}>
            {weatherData.weather[0].description}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  weatherContainer: {
    alignItems: "center",
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  temperature: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default WeatherInfo;
