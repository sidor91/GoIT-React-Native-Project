import { View, Text, StyleSheet } from "react-native";

export default function PostsScreen() {
	return (
		<View style={styles.container}>
			<Text>This is a Posts Screen</Text>
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
