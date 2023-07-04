import { useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Text,
	Pressable,
	TouchableOpacity,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const initialCredentials = {
	email: "",
	password: "",
};

export default function LoginScreen() {
	const [credentials, setCredentials] = useState(initialCredentials);
	const [isPasswordSecured, setIsPasswordSecured] = useState(true);
	const [isKeyboardShown, setisKeyboardShown] = useState(false);
	const [isEmailActive, setIsEmailActive] = useState(false);
	const [isPasswordActive, setIsPasswordActive] = useState(false);

	const navigation = useNavigation();

	const togglePasswordSecure = () => {
		setIsPasswordSecured(!isPasswordSecured);
	};

	const handleBlur = () => {
		setisKeyboardShown(false);
	};

		const onKeyboardClose = () => {
			Keyboard.dismiss();
		};

	return (
		<TouchableWithoutFeedback
			onPress={onKeyboardClose}
			// onLayout={onLayoutRootView}
		>
			<View style={styles.container}>
		<ImageBackground
			source={require("../../assets/wallpapers.png")}
			resizeMode="cover"
			style={styles.background}
		>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" && "padding"}
				style={styles.innerContainer}
			>
				<Text style={styles.formTitle}>Login</Text>
				<View style={styles.form}>
					<TextInput
						style={[styles.input, isEmailActive && styles.inputActive]}
						onChangeText={(value) =>
							setCredentials((prevProps) => ({
								...prevProps,
								email: value,
							}))
						}
						onFocus={() => {
							setisKeyboardShown(true);
							setIsEmailActive(true);
						}}
						onBlur={() => {
							setIsEmailActive(false);
							handleBlur();
						}}
						value={credentials.email}
						placeholder="Email"
						selectionColor="#FF6C00"
					/>
					<View
						style={[
							styles.passwordContainer,
							isPasswordActive && styles.passwordContainerActive,
						]}
					>
						<TextInput
							style={[
								styles.passwordInput,
								isPasswordActive && styles.passwordContainerActive,
							]}
							onChangeText={(value) =>
								setCredentials((prevProps) => ({
									...prevProps,
									password: value,
								}))
							}
							onFocus={() => {
								setisKeyboardShown(true);
								setIsPasswordActive(true);
							}}
							onBlur={() => {
								setIsPasswordActive(false);
								handleBlur();
							}}
							value={credentials.password}
							placeholder="Password"
							secureTextEntry={isPasswordSecured}
							selectionColor="#FF6C00"
						/>
						<Pressable>
							<Text
								style={styles.verifyButtonText}
								onPress={togglePasswordSecure}
								styles={styles.haveAccountText}
							>
								{isPasswordSecured ? "Show" : "Hide"}
							</Text>
						</Pressable>
					</View>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={() =>
						console.log(
							`Email: ${credentials.email} Password: ${credentials.password}`
						)
					}
				>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
				<View
					style={{
						flexDirection: "row",
						marginBottom: isKeyboardShown ? -1 : 78,
					}}
				>
					<Text style={styles.haveAccountText}>Don't have an account? </Text>
					<Pressable onPress={() => navigation.navigate("Registration")}>
						<Text style={styles.haveAccountText}>Register</Text>
					</Pressable>
				</View>
			</KeyboardAvoidingView>
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
	innerContainer: {
		marginTop: "auto",
		backgroundColor: "#fff",
		paddingHorizontal: 16,
		alignItems: "center",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	form: {
		marginTop: "auto",
		marginBottom: 43,
		width: "100%",
	},
	formTitle: {
		marginTop: 32,
		marginBottom: 33,
		fontFamily: "Roboto-Medium",
		fontSize: 30,
	},
	input: {
		fontFamily: "Roboto-Regular",
		color: "#000",
		height: 50,
		paddingHorizontal: 16,
		width: "100%",
		fontSize: 16,
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 8,
		marginBottom: 16,
		backgroundColor: "#F6F6F6",
		borderColor: "#E8E8E8",
	},
	inputActive: {
		backgroundColor: "#FFFFFF",
		borderColor: "#FF6C00",
	},
	passwordContainer: {
		height: 50,
		borderWidth: 1,
		paddingHorizontal: 16,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 8,
		backgroundColor: "#F6F6F6",
		borderColor: "#E8E8E8",
	},
	passwordContainerActive: {
		backgroundColor: "#FFFFFF",
		borderColor: "#FF6C00",
	},
	passwordInput: {
		fontFamily: "Roboto-Regular",
		fontSize: 16,
		width: "85%",
		color: "#000",
	},
	verifyButtonText: {
		fontFamily: "Roboto-Regular",
		color: "#1B4371",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#FF6C00",
		padding: 16,
		width: "100%",
		borderRadius: 100,
		marginBottom: 16,
	},
	buttonText: {
		fontFamily: "Roboto-Regular",
		fontSize: 16,
		color: "#FFF",
	},
	haveAccountText: {
		fontFamily: "Roboto-Regular",
		fontSize: 16,
		color: "#1B4371",
	},
});
