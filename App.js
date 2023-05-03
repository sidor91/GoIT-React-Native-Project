import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import {
	StyleSheet,
	View,
	ImageBackground,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from "./screens/LoginScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

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

		const onKeyboardClose = () => {
			Keyboard.dismiss();
		};


	return (
		<TouchableWithoutFeedback onPress={onKeyboardClose}>
			<View style={styles.container} onLayout={onLayoutRootView}>
				<ImageBackground
					source={require("./assets/wallpapers.png")}
					resizeMode="cover"
					style={styles.background}
				>
					<RegistrationScreen />
					{/* <LoginScreen /> */}
					<StatusBar style="auto" />
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		flex: 1,
		justifyContent: "flex-end",
	},
});
