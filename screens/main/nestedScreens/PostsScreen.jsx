import {
	View,
	Text,
	StyleSheet,
	Image,
	FlatList,
	Button,
	TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
// import nextId from "react-id-generator";

export default function HomeScreen({ route, navigation  }) {
	const [posts, setPosts] = useState([]);

	useEffect(
		() => {
			console.log(route.params)
			// console.log("route params", route.params)
			// if (route.params?.cameraError) {
			// 	console.log(route.params.cameraError);
			// }
			if (route.params) {
				setPosts((initialState) => [...initialState, route.params]);
			}
		},
		// []
		[route.params]
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				renderItem={({ item }) => (
					<View style={styles.postContiner}>
						<Image style={styles.postPhoto} src={item.photo} />
						<Text style={{ marginTop: 8 }}>{item.photoName}</Text>
						<View style={styles.commentAndLocationContainer}>
							<TouchableOpacity style={{ flexDirection: "row" }}>
								<Feather name="message-circle" size={24} color="#BDBDBD" />
								<Text></Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ flexDirection: "row" }}
								onPress={() => navigation.navigate("Map", item.location)}
							>
								<Feather name="map-pin" size={24} color="#BDBDBD" />
								<Text></Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
				keyExtractor={(item, index) => index}
			/>
			{/* <Button
				title="Go to comments screen"
				onPress={() => navigation.navigate("Comments")}
			/> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
	},
	postContiner: {
		marginTop: 32,
		height: 299,
		width: "100%",
	},
	postPhoto: {
		width: "100%",
		height: "100%",
	},
	commentAndLocationContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 8
	},
});

