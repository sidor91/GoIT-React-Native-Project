import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
	return (
		<View style={styles.container}>
			<Text>This is a Profile Screen</Text>
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
