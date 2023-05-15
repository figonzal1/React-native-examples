import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const route = useRoute();
  const mapView = useRef(null);

  const coordinates = [];
  const details = route.params.searchResults.map((item) =>
    item.properties.map((prop) => {
      coordinates.push({
        latitute: Number(prop.latitude),
        longitude: Number(prop.longitude),
      });
    })
  );

  useEffect(() => {
    mapView.current.fitToCoordinates(coordinates, {
      edgePadding: {
        top: 190,
        right: 190,
        bottom: 190,
        left: 190,
      },
    });
  }, []);

  return (
    <View>
      <MapView
        ref={mapView}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {route.params.searchResults.map((item) =>
          item.properties.map((prop, index) => (
            <Marker
              key={index}
              title={prop.name}
              coordinate={{
                latitude: Number(prop.latitude),
                longitude: Number(prop.longitude),
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#003580",
                  paddingHorizontal: 7,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {prop.newPrice}
                </Text>
              </Pressable>
            </Marker>
          ))
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
