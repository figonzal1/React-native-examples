import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SavedScreen from "../screens/SavedScreen";
import BookingScreen from "../screens/BookingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Colors from "../constants/Colors";
import SearchScreen from "../screens/SearchScreen";
import PlacesScreen from "../screens/PlacesScreen";
import MapScreen from "../screens/MapScreen";
import PropertyInfoScreen from "../screens/PropertyInfoScreen";
import RoomsScreen from "../screens/RoomsScreen";
import UserScreen from "../screens/UserScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen";

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const MyStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyBottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Places" component={PlacesScreen} />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Info" component={PropertyInfoScreen} />
        <Stack.Screen name="Rooms" component={RoomsScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    );
  };

  const MyBottomTabs = () => {
    return (
      <Tab.Navigator>
        {/* Home Screen */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: true,
            headerTitleAlign: "center",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color={Colors.primaryColor} />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

        {/* Saved Screen */}
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Saved",
            headerShown: true,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color={Colors.primaryColor} />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />

        {/* Book Screen */}
        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            tabBarLabel: "Bookings",
            headerShown: true,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons
                  name="notifications"
                  size={24}
                  color={Colors.primaryColor}
                />
              ) : (
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              ),
          }}
        />

        {/* Profile Screen */}
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: true,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color={Colors.primaryColor} />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default StackNavigator;
