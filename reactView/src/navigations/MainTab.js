import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Weather, Board } from "../screens/Index";

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, name }) => {
  return (
    <MaterialIcons
      name={name}
      size={26}
      color={focused ? "#3679fe" : "#a6a6a6"}
    />
  );
};

const MainTab = ({ navigation, route }) => {
  useEffect(() => {
    const title = getFocusedRouteNameFromRoute(route) ?? "Channels";
    navigation.setOptions({
      headerTitle: title,
      headerRight: () =>
        title === "Board" && (
          <MaterialIcons
            name="add"
            size={26}
            style={{ margin: 10 }}
            onPress={() => navigation.navigate("AddPost")}
          />
        ),
    });
  }, [route]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerLeftLabelVisible: false,
        tabBarActiveTintColor: "#3679fe",
        tabBarInactiveTintColor: "#a6a6a6",
      }}
    >
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{
          title: "Weather",
          tabBarIcon: ({ focused }) =>
            TabBarIcon({
              focused,
              name: focused ? "cloud" : "cloud-queue",
            }),
        }}
      />
      <Tab.Screen
        name="Board"
        component={Board}
        options={{
          title: "Board",
          tabBarIcon: ({ focused }) =>
            TabBarIcon({
              focused,
              name: focused ? "bookmark" : "bookmark-outline",
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
