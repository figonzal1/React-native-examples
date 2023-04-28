import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import SavedScreen from '../screens/SavedScreen'
import BookingScreen from '../screens/BookingScreen'
import ProfileScreen from '../screens/ProfileScreen'

const StackNavigation = () => {

	const Tab = createBottomTabNavigator();
	const Stack = createNativeStackNavigator();

	const BottomTabs = () => {
		return (
			<Tab.Navigator>

				{/* Home Screen */}
				<Tab.Screen name='Home' component={HomeScreen} options={{
					tabBarLabel: "Home",
					headerShown: true,
					tabBarIcon: ({ focused }) => focused ? (
						<Entypo name="home" size={24} color="#003580" />
					) : (
						<AntDesign name="home" size={24} color="black" />
					)
				}} />

				{/* Saved Screen */}
				<Tab.Screen name='Saved' component={SavedScreen} options={{
					tabBarLabel: "Saved",
					headerShown: true,
					tabBarIcon: ({ focused }) => focused ? (
						<AntDesign name="heart" size={24} color="#003580" />
					) : (
						<AntDesign name="hearto" size={24} color="black" />
					)
				}} />

				{/* Book Screen */}
				<Tab.Screen name='Bookings' component={BookingScreen} options={{
					tabBarLabel: "Bookings",
					headerShown: true,
					tabBarIcon: ({ focused }) => focused ? (
						<Ionicons name="notifications" size={24} color="#003580" />
					) : (
						<Ionicons name="notifications-outline" size={24} color="black" />
					)
				}} />

				{/* Profile Screen */}
				<Tab.Screen name='Profile' component={ProfileScreen} options={{
					tabBarLabel: "Profile",
					headerShown: true,
					tabBarIcon: ({ focused }) => focused ? (
						<Ionicons name="person" size={24} color="#003580" />
					) : (
						<Ionicons name="person-outline" size={24} color="black" />
					)
				}} />


			</Tab.Navigator>
		)
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Main' component={BottomTabs} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default StackNavigation

const styles = StyleSheet.create({})