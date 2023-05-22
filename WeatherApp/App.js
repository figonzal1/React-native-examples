import React from "react";
import { View, StyleSheet } from "react-native";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import CurrentWeather from "./src/screens/CurrentWeather";

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
