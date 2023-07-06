import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import useRoute from './router'
import { store, persistor } from "./redux/store";

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

	const routing = useRoute(false)


	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<View onLayout={onLayoutRootView} style={styles.container}>
					<NavigationContainer>{routing}</NavigationContainer>
				</View>
			</PersistGate>
		</Provider>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});