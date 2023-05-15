import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.primaryColor,
        height: 65,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Pressable
        style={[styles.pressableContainer, styles.pressableContainerSelected]}
      >
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text style={styles.headerContainer}>Stays</Text>
      </Pressable>

      <Pressable style={[styles.pressableContainer]}>
        <Ionicons name="airplane-outline" size={26} color="white" />
        <Text style={styles.headerContainer}>Flights</Text>
      </Pressable>

      <Pressable style={[styles.pressableContainer]}>
        <Ionicons name="car-outline" size={26} color="white" />
        <Text style={styles.headerContainer}>Car Rental</Text>
      </Pressable>

      <Pressable style={[styles.pressableContainer]}>
        <FontAwesome5 name="uber" size={24} color="white" />
        <Text style={styles.headerContainer}>Taxi</Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  pressableContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pressableContainerSelected: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 20,
    padding: 8,
  },
  headerContainer: {
    marginLeft: 8,
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
});
