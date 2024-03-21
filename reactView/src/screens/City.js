import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { getCities } from "../utils/WeatherData";
import Button from "../components/Button";

const City = ({ route, navigation }) => {
  const country = route.params;
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const data = await getCities(country);
        setCities(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCities();
  }, [country]);

  const _Press = (city) => {
    navigation.navigate("WeatherInfo", { country: route.params, city: city });
  };

  return (
    <View>
      <FlatList
        data={cities}
        renderItem={({ item }) => (
          <Button title={item.name} onPress={() => _Press(item.name)} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default City;
