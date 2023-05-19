import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const IconText = ({ iconName, iconColor, bodyText }) => {
  return (
    <View>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={styles.textTheme}>{bodyText}</Text>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold",
  },
});
