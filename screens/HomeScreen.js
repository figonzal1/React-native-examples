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
    <>
      <View>
        <Header />
        <ScrollView>
          <View style={styles.container}>
            {/* Destination */}
            <Pressable style={styles.pressableContainer}>
              <Feather name="search" size={24} color="black" />
              <TextInput
                placeholderTextColor={"black"}
                placeholder="Enter your destination"
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
                placeholder={"Apr 27, 2023 => Jul 10, 2023"}
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
