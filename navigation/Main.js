import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Explore from "../screen/Main/Explore";
import Saved from "../screen/Main/Saved";
import MapScreen from "../screen/Main/Map";
import Profile from "../screen/Main/Profile";
import colors from "../colors";
import utils from "../utils";

const Main = createBottomTabNavigator();

export default () => (
  <Main.Navigator
    tabBarOptions={{
      activeTintColor: colors.red,
      tabStyle: {
        paddingTop: 5,
      },
      labelStyle: {
        textTransform: "uppercase",
        fontWeight: "500",
        paddingTop: 5,
      },
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        const isIos = utils.isIos();
        let iconName = `${isIos ? "ios-" : "md-"}`;
        if (route.name === "Explore") {
          iconName += "search";
        } else if (route.name === "Saved") {
          iconName += "heart";
        } else if (route.name === "Map") {
          iconName += "map";
        } else if (route.name === "Profile") {
          iconName += "person";
        }
        return (
          <Ionicons
            name={iconName}
            size={24}
            color={focused ? colors.red : "gray"}
          />
        );
      },
    })}
  >
    <Main.Screen name="Explore" component={Explore}></Main.Screen>
    <Main.Screen name="Saved" component={Saved}></Main.Screen>
    <Main.Screen name="Map" component={MapScreen}></Main.Screen>
    <Main.Screen name="Profile" component={Profile}></Main.Screen>
  </Main.Navigator>
);
