import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import Colors from "../constants/Colors";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const RoomsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  //console.log(route.params);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShow: true,
      title: "Available Rooms",
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
    });
  }, []);

  const [selected,setSelected] = useState([])

  return (
    <ScrollView>
      {route.params.rooms.map((item, index) => (
        <Pressable
          style={{
            margin: 10,
            backgroundColor: "white",
            padding: 10,
          }}
          key={index}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#007fff",
                fontSize: 17,
                fontWeight: "500",
              }}
            >
              {item.name}
            </Text>
            <AntDesign name="infocirlceo" size={24} color={"#007fff"} />
          </View>

          <Text style={{ marginTop: 3 }}>pay at property</Text>
          <Text style={{ marginTop: 3, color: "green", fontSize: 16 }}>
            Free cancellation Available
          </Text>
          <View
            style={{
              marginTop: 4,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "red",
                textDecorationLine: "line-through",
              }}
            >
              Rs{route.params.oldPrice}
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Rs{route.params.newPrice}
            </Text>
          </View>
          <Amenities />

          <Pressable
            style={{
              borderColor: "#007fff",
              borderWidth: 2,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "700",
                color: "#007fff",
              }}
            >
              SELECT
            </Text>
          </Pressable>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default RoomsScreen;

const styles = StyleSheet.create({});
