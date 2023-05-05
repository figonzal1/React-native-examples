import React, { useLayoutEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import Header from "../components/Header";
import Colors from "../constants/Colors";
import DatePicker from "react-native-date-ranges";
import { Button } from "react-native";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [selectedDates, setSelectedDate] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();

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

  const searchPlaces = (places) => {
    if (!route.params || !selectedDates) {
      Alert.alert("Invalid Details", "Please enter all the details", [
        {
          text: "Cancel",
          onPress: () => console.log("cancel pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("ok pressed") },
      ]);
    }
  };

  return (
    <>
      <View>
        <Header />
        <ScrollView>
          {/* Form */}
          <View style={styles.container}>
            {/* Destination */}
            <Pressable
              style={styles.pressableContainer}
              onPress={() => navigation.navigate("Search")}
            >
              <Feather name="search" size={24} color="black" />
              <TextInput
                placeholderTextColor={"black"}
                placeholder={
                  route?.params ? route.params.input : "Enter your destination"
                }
              />
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
                onConfirm={(startDate, endDate) =>
                  setSelectedDate(startDate, endDate)
                }
                allowFontScaling={false}
                placeholder={"Select your dates"}
                mode={"range"}
              />
            </Pressable>

            {/* Rooms & People */}
            <Pressable
              style={styles.pressableContainer}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput
                placeholderTextColor={"red"}
                placeholder={`${rooms} room - ${adults} adults - ${children} children`}
              />
            </Pressable>

            {/* Search */}
            <Pressable
              onPress={() => searchPlaces(route?.params)}
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

          {/* Travel Section */}
          <Text
            style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }}
          >
            Travel More spend less
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: Colors.primaryColor,
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                Genius
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                You are ate genius level one in our loyalty program
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: "#e0e0e0",
                borderWidth: 2,
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                15% Discounts
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Complete 5 stays to unlock level 2
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: "#e0e0e0",
                borderWidth: 2,
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                10% Discounts
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Enjoy Discounts at participating at properties of worldwide
              </Text>
            </Pressable>
          </ScrollView>

          {/* Image Booking.com section */}
          <Pressable
            style={{
              marginTop: 40,
              marginBottom: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ resizeMode: "cover", width: 250, height: 60 }}
              source={{
                uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
              }}
            />
          </Pressable>
        </ScrollView>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: Colors.primaryColor,
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent
          style={{
            width: "100%",
            height: 310,
          }}
        >
          <Pressable>
            {/* Rooms */}
            <View style={styles.modalRowContainer}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Pressable
                  style={styles.buttonContainer}
                  onPress={() => setRooms(Math.max(1, rooms - 1))}
                >
                  <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Pressable>
                  <Text style={styles.counterText}>{rooms}</Text>
                </Pressable>
                <Pressable
                  style={styles.buttonContainer}
                  onPress={() => setRooms((c) => c + 1)}
                >
                  <Text style={styles.buttonText}>+</Text>
                </Pressable>
              </Pressable>
            </View>

            {/* Adults */}
            <View style={styles.modalRowContainer}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Pressable
                  style={styles.buttonContainer}
                  onPress={() => setAdults(Math.max(1, adults - 1))}
                >
                  <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Pressable>
                  <Text style={styles.counterText}>{adults}</Text>
                </Pressable>
                <Pressable
                  style={styles.buttonContainer}
                  onPress={() => setAdults((c) => c + 1)}
                >
                  <Text style={styles.buttonText}>+</Text>
                </Pressable>
              </Pressable>
            </View>

            {/* Children */}
            <View style={styles.modalRowContainer}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Pressable
                  style={styles.buttonContainer}
                  onPress={() => setChildren(Math.max(0, children - 1))}
                >
                  <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Pressable>
                  <Text style={styles.counterText}>{children}</Text>
                </Pressable>
                <Pressable
                  style={styles.buttonContainer}
                  onPress={() => setChildren((c) => c + 1)}
                >
                  <Text style={styles.buttonText}>+</Text>
                </Pressable>
              </Pressable>
            </View>
          </Pressable>
        </ModalContent>
      </BottomModal>
    </>
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
  modalRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  buttonContainer: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: "#b3b3b3",
    backgroundColor: "#e0e0e0",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 6,
  },
  counterText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 6,
  },
});
