import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import { getCountries } from "../utils/WeatherData";
import { Button } from "../components";

const Weather = ({ navigation }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCountries();
        setList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const _Press = (name) => {
    navigation.navigate("City", name);
  };

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={list}
      renderItem={({ item }) => (
        <Button title={item.name} onPress={() => _Press(item.name)} />
      )}
      windowSize={3}
    />
  );
};

export default Weather;
