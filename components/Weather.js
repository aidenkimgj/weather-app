import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherName = {
  Thunderstorm: {
    icon: "weather-lightning-rainy",
    gradient: ["#000C40", "#F0F2F0"],
  },

  Drizzle: {
    icon: "weather-pouring",
    gradient: ["#536976", "#BBD2C5"],
  },

  Rain: {
    icon: "weather-rainy",
    gradient: ["#43C6AC", "#191654"],
  },

  Snow: {
    icon: "weather-snowy",
    gradient: ["#EFEFBB", "#D4D3DD"],
  },
  Tornado: {
    icon: "weather-tornado",
    gradient: ["#0F2027", "#203A43", "#2C5364"],
  },
  Clear: {
    icon: "weather-sunny",
    gradient: ["#2980B9", "#6DD5FA", "#ffffff"],
  },

  Mist: {
    icon: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Smoke: {
    icon: "weather-fog",
    gradient: ["#334d50", "#cbcaa5"],
  },
  Haze: {
    icon: "weather-fog",
    gradient: ["#135058", "#F1F2B5"],
  },

  Dust: {
    icon: "weather-fog",
    gradient: ["#CCCCB2", "#757519"],
  },

  Ash: {
    icon: "weather-fog",
    gradient: ["#F0C27B", "#4B1248"],
  },

  Squall: {
    icon: "weather-fog",
    gradient: ["#77A1D3", "#79CBCA", "#E684AE"],
  },

  Clouds: {
    icon: "weather-cloudy",
    gradient: ["#8e9eab", "#eef2f3"],
  },
};

const Weather = ({ temp, condition, description, city }) => {
  let _condition = "Clear";
  return (
    <LinearGradient
      colors={weatherName[_condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content"></StatusBar>
      <Text style={styles.city}>{city}</Text>
      <MaterialCommunityIcons
        name={weatherName[_condition].icon}
        size={60}
        color="white"
      />
      <Text style={styles.temp}>{temp}</Text>
      <Text style={styles.description}>{description}</Text>
    </LinearGradient>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#1fc7ff",
  },
  city: {
    color: "grey",
    fontSize: 50,
    marginTop: 100,
    marginBottom: 20,
  },
  temp: {
    color: "white",
    fontSize: 50,
  },
  condition: {
    color: "#edeff0",
    fontSize: 20,
  },
  description: {
    color: "white",
    fontSize: 20,
  },
});

export default Weather;
