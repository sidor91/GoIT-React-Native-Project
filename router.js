import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { SvgUri } from "react-native-svg";
import { Image, StyleSheet, View } from "react-native";
import { Ionicons, SimpleLineIcons, Feather } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import CreatePostScreen from "./screens/main/CreatePostsScreen";
import PostsScreen from "./screens/main/PostsScreen";
import ProfileScreen from "./screens/main/ProfileScreen";


const useRoute = (isAuth) => {
	if (!isAuth) {
		return (
			<AuthStack.Navigator initialRouteName="Publications">
				<AuthStack.Screen
					name="Registration"
					component={RegistrationScreen}
					options={{ headerShown: false }}
				/>
				<AuthStack.Screen
					name="Login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
			</AuthStack.Navigator>
		);
	}
	return (
		<MainTab.Navigator>
			<MainTab.Screen
				name="Posts"
				component={PostsScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ focused, size, color }) => (
						<SimpleLineIcons name="grid" size={24} color="black" />
					),
				}}
			/>
			<MainTab.Screen
				name="Create"
				component={CreatePostScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ focused, size, color }) => (
						<View style={styles.addButton}>
							<Ionicons name="md-add-outline" size={24} color="#FFFFFF" />
						</View>
					),
				}}
			/>
			<MainTab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ focused, size, color }) => (
						<Feather name="user" size={24} color="black" />
					),
				}}
			/>
		</MainTab.Navigator>
	);
};

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: "#FF6C00",
        width: 70,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
})

export default useRoute;

