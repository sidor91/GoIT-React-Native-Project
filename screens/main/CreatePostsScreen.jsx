import { View, Text, StyleSheet } from "react-native";


export default function CreatePostScreen() {
    return (
			<View style={styles.container}>
				<Text>This is a Create Post Screen</Text>
			</View>
		);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});