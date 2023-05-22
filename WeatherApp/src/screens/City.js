import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import IconText from "../components/IconText";

const City = () => {
  const {
    cityName,
    cityText,
    countryName,
    populationText,
    populationWrapper,
    wrapper,
    riseWrapper,
    riseSetText,
  } = styles;

  return (
    <View style={wrapper}>
      <ImageBackground
        style={styles.imageLayout}
        source={{
          uri: "https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        }}
      >
        <Text style={[cityText, cityName]}>London</Text>
        <Text style={[cityText, countryName]}>UK</Text>

        <View style={populationWrapper}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={"8000"}
            bodyTextStyle={populationText}
          />
        </View>

        <View style={riseWrapper}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"10:46:58am"}
            bodyTextStyle={riseSetText}
          />

          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"17:28:15pm"}
            bodyTextStyle={riseSetText}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  populationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
    fontWeight: "bold",
  },
  riseWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default City;
