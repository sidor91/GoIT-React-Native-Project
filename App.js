import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { useCallback } from "react";
import {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	Pressable,
	Image,
} from "react-native";

import useRoute from './router'


SplashScreen.preventAutoHideAsync();


export default function App() {
	const [fontsLoaded] = useFonts({
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	const routing = useRoute(true)

	const onKeyboardClose = () => {
		Keyboard.dismiss();
	};

	return (
		<TouchableWithoutFeedback
			onPress={onKeyboardClose}
			onLayout={onLayoutRootView}
		>
			<View style={styles.container}>
				<NavigationContainer>
					{routing}
				</NavigationContainer>
				<StatusBar style="auto" />
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});


