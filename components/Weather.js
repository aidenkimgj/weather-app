import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const Weather = ({ temp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{temp}</Text>
    </View>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1fc7ff",
  },
  text: {
    color: "#182422",
    fontSize: 20,
  },
});

export default Weather;
