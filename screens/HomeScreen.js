import React, { useLayoutEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import Header from "../components/Header";
import Colors from "../constants/Colors";
import DatePicker from "react-native-date-ranges";
import { Button } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [selectedDates, setSelectedDate] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShow: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: Colors.primaryColor,
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={styles.customButton}
        primary
        title="Submit"
      />
    );
  };

  return (
    <View>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          {/* Destination */}
          <Pressable style={styles.pressableContainer}>
            <Feather name="search" size={24} color="black" />
            <TextInput placeholder="Enter your destination" />
          </Pressable>

          {/* Selected Dates */}
          <Pressable style={styles.pressableContainer}>
            <Feather name="calendar" size={24} color="black" />
            <DatePicker
              style={{
                width: 350,
                height: 45,
                borderRadius: 0,
                borderWidth: 0,
                borderColor: "transparent",
              }}
              customStyles={{
                placeholderText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
                headerStyle: {
                  backgroundColor: Colors.primaryColor,
                },
                contentText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
              }}
              selectedBgColor="#0047AB"
              customButton={(onConfirm) => customButton(onConfirm)}
              //onConfirm={customButton}
              allowFontScaling={false}
              plceholder={"Apr 27, 2023 => Jul 10, 2023"}
              mode={"range"}
            />
          </Pressable>

          {/* Rooms & People */}
          <Pressable style={styles.pressableContainer}>
            <Ionicons name="person-outline" size={24} color="black" />
            <TextInput
              placeholderTextColor={"red"}
              placeholder="1 Room - 2 Person - 0 Children"
            />
          </Pressable>

          {/* Search */}
          <Pressable
            style={{
              paddingHorizontal: 10,
              borderColor: Colors.secondaryColor,
              borderWidth: 2,
              paddingVertical: 15,
              backgroundColor: "#2a52be",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "500",
                color: "white",
              }}
            >
              Search
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderColor: Colors.secondaryColor,
    borderWidth: 2,
    borderRadius: 6,
  },
  pressableContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    borderColor: Colors.secondaryColor,
    borderWidth: 2,
    paddingVertical: 15,
  },
  customButton: {
    container: { width: "80%", marginHorizontal: "3%" },
    text: { fontSize: 20 },
  },
});
