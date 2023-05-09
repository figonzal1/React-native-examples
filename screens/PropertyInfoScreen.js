import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../constants/Colors";
import { Pressable, Text } from "react-native";
import { pixelNormalize } from "../components/Normalise";
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route.params);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShow: true,
      title: `${route.params.name}`,
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

  const priceDiff = route.params.oldPrice - route.params.newPrice;
  const offerDiff = (Math.abs(priceDiff) / route.params.oldPrice) * 100;

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Pressable
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              margin: 10,
            }}
          >
            {route.params.photos.slice(0, 5).map((photo) => (
              <View
                style={{
                  margin: 6,
                }}
              >
                <Image
                  style={{
                    width: 120,
                    height: pixelNormalize(80),
                    borderRadius: pixelNormalize(4),
                  }}
                  source={{ uri: photo.image }}
                />
              </View>
            ))}
            <Pressable
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center", marginLeft: 20 }}>
                Show More
              </Text>
            </Pressable>
          </Pressable>

          <View
            style={{
              marginHorizontal: 12,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                }}
              >
                {route.params.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 7,
                }}
              >
                <MaterialIcons name="stars" size={24} color="green" />
                <Text>{route.params.rating}</Text>
                <View
                  style={{
                    backgroundColor: Colors.primaryColor,
                    paddingVertical: 3,
                    borderRadius: 5,
                    width: 100,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    Genius Level
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#17b169",
                paddingHorizontal: 6,
                paddingVertical: 4,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "white", fontSize: 13 }}>
                Travel sustenaible
              </Text>
            </View>
          </View>

          <Text
            style={{
              borderColor: "#E0e0e0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />

          <Text
            style={{
              fontSize: 15,
              marginTop: 10,
              marginHorizontal: 12,
              fontWeight: "500",
              fontSize: 17,
            }}
          >
            Price for 1 Night and {route.params.adults} adults
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 4,
              alignItems: "center",
              gap: 8,
              marginHorizontal: 12,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
              }}
            >
              Rs {route.params.oldPrice * route.params.adults}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 18,
              }}
            >
              Rs {route.params.newPrice * route.params.adults}
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: 12,
              marginTop: 7,
              backgroundColor: "green",
              paddingHorizontal: 4,
              paddingVertical: 5,
              width: 78,
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              {offerDiff.toFixed(0)} % OFF
            </Text>
          </View>

          <Text
            style={{
              borderColor: "#E0e0e0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />

          <View
            style={{
              margin: 12,
              flexDirection: "row",
              alignItems: "center",
              gap: 60,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 15, fontWeight: "600", marginBottom: 3 }}
              >
                Check In
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#007fff",
                }}
              >
                {route.params.selectedDates.startDate}
              </Text>
            </View>

            <View>
              <Text
                style={{ fontSize: 15, fontWeight: "600", marginBottom: 3 }}
              >
                Check Out
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#007fff",
                }}
              >
                {route.params.selectedDates.endDate}
              </Text>
            </View>
          </View>

          <View style={{ margin: 12 }}>
            <Text style={{ fontSize: 15, fontWeight: "600", marginBottom: 3 }}>
              Rooms and Guests
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "#007fff",
              }}
            >
              {route.params.rooms} rooms {route.params.adults} adults{" "}
              {route.params.children} children
            </Text>
          </View>

          <Text
            style={{
              borderColor: "#E0e0e0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />

          <Amenities />

          <Text
            style={{
              borderColor: "#E0e0e0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />

          <Pressable
            onPress={() => {
              navigation.navigate("Rooms", {
                rooms: route.params.availableRooms,
                oldPrice: route.params.oldPrice,
                newPrice: route.params.newPrice,
                name: route.params.name,
                children: route.params.children,
                adults: route.params.adults,
                rating: route.params.rating,
                startDate: route.params.selectedDates.startDate,
                endDate: route.params.selectedDates.endDate,
              });
            }}
            style={{
              backgroundColor: "#6cb4ee",
              padding: 15,
              width: "95%",
              marginHorizontal: 10,
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              Select Availability
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
