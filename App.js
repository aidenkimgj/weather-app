import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "b7fd9eb99a43d2167bf33830f871d427";

const App = () => {
  const [isLoading, setIsLoding] = useState(true);

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data);
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

  return { isLoading } ? <Loading /> : null;
};

export default App;
