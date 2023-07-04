import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "./nestedScreens/PostsScreen";
import CommentsScreen from "./nestedScreens/CommentsScreen";
import MapScreen from "./nestedScreens/MapScreen";
import { Feather } from "@expo/vector-icons";

const NestedScreen = createStackNavigator();

const HomeScreen = () => {
	return (<NestedScreen.Navigator>
		<NestedScreen.Screen name="Posts" component={PostsScreen} options={
			{headerRight: () => (
						<Feather
							name="log-out"
							size={24}
							color="black"
							style={{ marginRight: 10, color: "#BDBDBD" }}
						/>
					)}
		} />
		<NestedScreen.Screen name="Comments" component={CommentsScreen} />
		<NestedScreen.Screen name="Map" component={MapScreen} />
	</NestedScreen.Navigator>);
};

export default HomeScreen;


