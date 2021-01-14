import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Switch, Text, View } from "react-native";
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";

const weatherName = condition => {
  switch (condition) {
    case "Thunderstorm":
      return <Ionicons name="thunderstorm-outline" size={60} color="black" />;
      break;
    case "Drizzle":
      return <Ionicons name="rainy-sharp" size={60} color="black" />;
      break;
    case "Rain":
      return <Ionicons name="rainy-outline" size={60} color="black" />;
      break;
    case "Snow":
      return <Ionicons name="snow-sharp" size={60} color="black" />;
      break;
    case ("Mist", "Smoke", "Haze", "Dust", "Ash", "Squall"):
      return <Entypo name="air" size={60} color="black" />;
      break;
    case "Tornado":
      return (
        <MaterialCommunityIcons
          name="weather-tornado"
          size={60}
          color="black"
        />
      );
      break;
    case "Clear":
      return <Ionicons name="sunny-outline" size={60} color="black" />;
    default:
      return <Ionicons name="cloudy-outline" size={60} color="black" />;
      break;
  }
};

const Weather = ({ temp, condition, description, city }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      {weatherName(condition)}
      <Text style={styles.temp}>{temp}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

// Weather.propTypes = {
//   temp: PropTypes.number.isRequired,
//   condition: PropTypes.oneOf([
//     "Thunderstorm",
//     "Drizzle",
//     "Rain",
//     "Snow",
//     "Mist",
//     "Smoke",
//     "Haze",
//     "Dust",
//     "Ash",
//     "Squall",
//     "Tornado",
//     "Clear",
//     "Clouds",
//   ]).isRequired,
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1fc7ff",
  },
  city: {
    color: "white",
    fontSize: 50,
    marginBottom: 20,
  },
  temp: {
    color: "#182422",
    fontSize: 50,
  },
  condition: {
    color: "#edeff0",
    fontSize: 20,
  },
  description: {
    color: "grey",
    fontSize: 20,
  },
});

export default Weather;
