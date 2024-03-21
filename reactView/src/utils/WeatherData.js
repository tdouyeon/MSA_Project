const weatherPath = "http://10.0.2.2:8000/weather";

export const getWeather = async (city, country) => {
  try {
    const response = await fetch(
      `${weatherPath}/get?city=${city}&country=${country}`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const getCountries = async () => {
  try {
    const response = await fetch(`${weatherPath}/countries`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const getCities = async (country) => {
  try {
    const response = await fetch(`${weatherPath}/cities/${country}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
