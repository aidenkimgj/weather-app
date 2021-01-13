import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const Weather = ({ temp, condition }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temp}>{temp}</Text>
      <Text style={styles.condition}>{condition}</Text>
    </View>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1fc7ff",
  },
  temp: {
    color: "#182422",
    fontSize: 50,
  },
  condition: {
    color: "#edeff0",
    fontSize: 20,
  },
});

export default Weather;
