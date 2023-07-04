import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";

import useRoute from './router'
import { store } from "./redux/store";

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


	return (
		<Provider store={store}>
			<View
				onLayout={onLayoutRootView}
				style={styles.container}>
				<NavigationContainer>{routing}</NavigationContainer>
			</View>
		</Provider>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});