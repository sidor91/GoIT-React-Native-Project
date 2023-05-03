import { useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Text,
	Pressable,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
} from "react-native";

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

	const togglePasswordSecure = () => {
		setIsPasswordSecured(!isPasswordSecured);
	};

	const handleBlur = () => {
		setisKeyboardShown(false);
	};

	

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
			<View style={styles.loginContainer}>
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
						marginBottom: isKeyboardShown ? -90 : 78,
					}}
				>
					<Text style={styles.haveAccountText}>Don't have an account? </Text>
					<Pressable>
						<Text style={styles.haveAccountText}>Register</Text>
					</Pressable>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	form: {
		marginTop: "auto",
		marginBottom: 43,
		width: "100%",
	},
	loginContainer: {
		backgroundColor: "#fff",
		paddingHorizontal: 16,
		alignItems: "center",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
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
		color: "#1B4371"
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
