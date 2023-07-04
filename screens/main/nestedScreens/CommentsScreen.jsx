import { View, Text, StyleSheet } from "react-native";

export default function CommentsScreen () {
	return (
		<View>
			<Text>This is a Comments Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	conrainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
