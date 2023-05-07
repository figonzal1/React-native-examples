import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const PropertyCard = ({
  rooms,
  adults,
  children,
  selectedDates,
  property,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <Pressable
        style={{
          margin: 15,
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        {/* Image section cardview */}
        <View>
          <Image
            style={{
              height: height / 2.5,
              width: width - 270,
            }}
            source={{
              uri: property.image,
            }}
          ></Image>
        </View>

        {/* Information section cardview */}
        <View
          style={{
            padding: 10,
          }}
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
                width: 200,
              }}
            >
              {property.name}
            </Text>
            <AntDesign name="hearto" size={24} color={"red"} />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 5,
            }}
          >
            <MaterialIcons name="stars" size={24} color={"green"} />
            <Text>{property.rating}</Text>

            <View
              style={{
                backgroundColor: "#6cb4ee",
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

          <Text
            style={{
              width: 210,
              marginTop: 6,
              color: "gray",
              fontWeight: "bold",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>

          <Text
            style={{
              fontSize: 15,
              marginTop: 4,
              fontWeight: "500",
            }}
          >
            Price for 1 Night and {adults} adults
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
              }}
            >
              Rs {property.oldPrice * adults}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 18,
              }}
            >
              Rs {property.newPrice * adults}
            </Text>
          </View>

          <View
            style={{
              marginTop: 6,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "gray",
              }}
            >
              Deluxe room
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "gray",
              }}
            >
              Hotel Room: {rooms}
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#6082b6",
              paddingVertical: 2,
              borderRadius: 5,
              marginTop: 2,
              width: 150,
              paddingHorizontal: 3,
              marginTop: 4,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Limited Time deal
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
