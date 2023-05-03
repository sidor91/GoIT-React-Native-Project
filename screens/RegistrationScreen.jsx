import { useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Text,
	Pressable,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	Platform,
} from "react-native";

const initialCredentials = {
	login: "",
	email: "",
	password: "",
};

export default function RegistrationScreen() {
	const [credentials, setCredentials] = useState(initialCredentials);
	const [isPasswordSecured, setIsPasswordSecured] = useState(true);
	const [isKeyboardShown, setisKeyboardShown] = useState(false);
	const [isLoginActive, setIsLoginActive] = useState(false);
	const [isEmailActive, setIsEmailActive] = useState(false);
	const [isPasswordActive, setIsPasswordActive] = useState(false);

	const togglePasswordSecure = () => {
		setIsPasswordSecured(!isPasswordSecured);
	};

	const handleBlur = () => {
		setisKeyboardShown(false);
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.registrationContainer}>
				<View style={styles.photoContainer}>
					<Image
						style={styles.addPhotoBtn}
						source={require("../assets/add.png")}
						resizeMode="cover"
					/>
				</View>
				<Text style={styles.formTitle}>Registration</Text>
				<View style={styles.form}>
					<TextInput
						style={[styles.input, isLoginActive && styles.inputActive]}
						selectionColor="#FF6C00"
						onChangeText={(value) =>
							setCredentials((prevProps) => ({
								...prevProps,
								login: value,
							}))
						}
						onFocus={() => {
							setisKeyboardShown(true);
							setIsLoginActive(true);
						}}
						onBlur={() => {
							setIsLoginActive(false);
							handleBlur();
						}}
						value={credentials.login}
						placeholder="Login"
					/>
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
							`Login: ${credentials.login} Email: ${credentials.email} Password: ${credentials.password}`
						)
					}
				>
					<Text style={styles.buttonText}>Sign up</Text>
				</TouchableOpacity>
				<View
					style={{
						flexDirection: "row",
						marginBottom: isKeyboardShown ? -90 : 78,
					}}
				>
					<Text style={styles.haveAccountText}>Already have an account? </Text>
					<Pressable>
						<Text style={styles.haveAccountText}>Login</Text>
					</Pressable>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	registrationContainer: {
		marginTop: "auto",
		backgroundColor: "#fff",
		paddingHorizontal: 16,
		alignItems: "center",
		position: "relative",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	photoContainer: {
		position: "absolute",
		backgroundColor: "#F6F6F6",
		width: 120,
		height: 120,
		top: -60,
		borderRadius: 16,
	},
	addPhotoBtn: {
		width: 25,
		height: 25,
		top: 81,
		left: 107,
	},
	formTitle: {
		marginTop: 92,
		marginBottom: 33,
		fontFamily: "Roboto-Medium",
		fontSize: 30,
	},
	form: {
		marginBottom: 43,
		width: "100%",
	},
	input: {
		fontFamily: "Roboto-Regular",
		color: "#000",
		height: 50,
		marginBottom: 16,
		paddingHorizontal: 16,
		width: "100%",
		fontSize: 16,
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 8,
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
