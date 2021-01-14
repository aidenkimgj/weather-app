import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { Loading, Weather } from "./components";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "b7fd9eb99a43d2167bf33830f871d427";

const App = () => {
  const [isLoading, setIsLoding] = useState(true);
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState();
  const [description, setDescription] = useState();
  const [city, setCity] = useState();

  const getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather: [{ main, description }],
        name,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    setIsLoding(false);
    setTemp(temp);
    setCondition(main);
    setDescription(description);
    setCity(name);
    console.log("city: ", name);
  };
  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
      console.log("latitude:", latitude, "longitude", longitude);
    } catch (error) {
      Alert.alert("Can't find you.");
      setIsLoding(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Weather
      temp={Math.round(temp)}
      condition={condition}
      description={description}
      city={city}
    />
  );
};

export default App;
