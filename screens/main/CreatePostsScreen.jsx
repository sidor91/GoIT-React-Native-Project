import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Feather } from "@expo/vector-icons";

export default function CreatePostScreen({ navigation }) {
	const [isCameraReady, setIsCameraReady] = useState(false);
	const [camera, setCamera] = useState(null);
	const [photo, setPhoto] = useState(null);
	const [photoName, setPhotoName] = useState("");
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [preview, setPreview] = useState(true);
	const [location, setLocation] = useState(null);
	// const [locationError, setLocationError] = useState(null);
    const [cameraError, setCameraError] = useState(null);
    const [readyToPublish, setReadyToPublish]=useState(false)

	useEffect(() => {
		(async () => {
			const cameraPermission = await requestPermission();
			if (cameraPermission.status !== "granted") {
				setCameraError("Permission to access camera was denied");
				return;
			}
			// const { status } = await Location.requestForegroundPermissionsAsync();
			// if (status !== "granted") {
			// 	setLocationError("Permission to access location was denied");
			// 	return;
			// }
		})();
	}, []);

	const takePhoto = async () => {
		if (preview) {
			const capture = await camera.takePictureAsync();

			setPhoto(capture.uri);

			camera.pausePreview();
			setPreview(false);

			// console.log(coords);
			// const locationObj = {
			// 				latitude: getLocation.coords.latitude,
			// 				longitude: getLocation.coords.longitude,
			// 			};

			return;
		}
		camera.resumePreview();
		setPreview(true);
	};

	const publishPhoto = async () => {
		navigation.navigate("Posts", {
			photo,
			photoName,
			location: {
				latitude: coords.latitude,
				longitude: coords.longitude,
			},
		});
		camera.resumePreview();
		setPreview(true);
		setPhotoName("");
	};

	onLocationPress = async () => {
		const { coords } = await Location.getCurrentPositionAsync();
		const locationObj = {
			latitude: coords.latitude,
			longitude: coords.longitude,
		};
        await setLocation(locationObj);
        setReadyToPublish(true)
	};

	const onCameraReady = () => {
		setIsCameraReady(true);
	};

	const goToThePostsPage = () => {
		navigation.navigate("Posts", { cameraError });
	};

	return (
		<View style={styles.container}>
			{!cameraError && (
				<>
					<Camera
						style={styles.camera}
						ref={setCamera}
						onCameraReady={onCameraReady}
					>
						{!preview && (
							<View styles={styles.photoContainer}>
								<Image styles={styles.photo} src={photo} />
							</View>
						)}
						<TouchableOpacity
							style={[
								styles.iconContainer,

								!preview && styles.iconContainerWithOpacity,
							]}
							onPress={takePhoto}
						>
							<FontAwesome5
								name="camera"
								size={24}
								style={styles.icon}
								color={!preview ? "#FFFFFF" : "#BDBDBD"}
							/>
						</TouchableOpacity>
					</Camera>

					<Text style={{ ...styles.text, marginTop: 8 }}>Upload photo</Text>
					<TextInput
						style={[styles.text, styles.photoName]}
						placeholder="Name a photo..."
						onChangeText={(value) => {
							setPhotoName(value);
						}}
						value={photoName}
					/>
					<TextInput
						style={[styles.text, styles.photoName]}
						placeholder="Press to set a location..."
						onPressOut={onLocationPress}
						// onChangeText={(value) => {
						// 	setPhotoName(value);
						// }}
						// value={photoName}
					/>
					<TouchableOpacity
						style={styles.sendButton}
						onPress={publishPhoto}
						aria-disabled={readyToPublish}
					>
						<Text style={styles.sendButtonText}>Publish</Text>
					</TouchableOpacity>
				</>
			)}
			{cameraError && (
				<View style={{ marginTop: 32 }}>
					<Text>
						Permission to access camera was denied. Please go to the system
						settings, allow camera access and reload the app
					</Text>
					<TouchableOpacity
						style={styles.sendButton}
						onPress={goToThePostsPage}
					>
						<Text style={styles.sendButtonText}>To the Posts page</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingHorizontal: 16,
	},
	camera: {
		height: 240,
		width: "100%",
		marginTop: 32,
		backgroundColor: "#F6F6F6",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#E8E8E8",
		borderRadius: 8,
	},
	photoContainer: {
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	iconContainer: {
		width: 60,
		height: 60,
		backgroundColor: "#FFFFFF",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
	},
	iconContainerWithOpacity: {
		backgroundColor: "rgba(255, 255, 255, 0.3)",
	},
	photo: {
		height: "100%",
		width: "100%",
	},
	text: {
		fontFamily: "Roboto-Regular",
		fontSize: 16,
		color: "#BDBDBD",
	},
	photoName: {
		marginTop: 32,
		borderBottomWidth: 1,
		borderColor: "#E8E8E8",
		height: 50,
		color: "#000",
	},
	sendButton: {
		alignItems: "center",
		backgroundColor: "#FF6C00",
		padding: 16,
		width: "100%",
		borderRadius: 100,
		marginTop: 32,
	},
	sendButtonText: {
		fontFamily: "Roboto-Regular",
		fontSize: 16,
		color: "#FFF",
	},
});
