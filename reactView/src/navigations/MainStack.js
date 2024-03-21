import { createStackNavigator } from "@react-navigation/stack";
import {
  Weather,
  WeatherInfo,
  City,
  AddPost,
  PostDetail,
} from "../screens/Index";
import MainTab from "./MainTab";

const Stack = createStackNavigator();

export default MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Main" component={MainTab} />
      <Stack.Screen name="Home" component={Weather} />
      <Stack.Screen name="City" component={City} />
      <Stack.Screen name="WeatherInfo" component={WeatherInfo} />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{
          title: "게시글",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="AddPost"
        component={AddPost}
        options={{
          title: "게시글 등록",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};
