import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import Explore from "../screen/Main/Explore";
import Saved from "../screen/Main/Saved";
import MapScreen from "../screen/Main/Map";
import Profile from "../screen/Main/Profile";
import colors from "../colors";
import utils from "../utils";
import Room from "../screen/Main/Room";
import BackBtn from "../components/Auth/BackBtn";

const TabsNavigator = createBottomTabNavigator();

const Tabs = () => (
  <TabsNavigator.Navigator
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
        ///setting iconName depend on platform IOS and Android
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
    <TabsNavigator.Screen name="Explore" component={Explore} />
    <TabsNavigator.Screen name="Saved" component={Saved} />
    <TabsNavigator.Screen name="Map" component={MapScreen} />
    <TabsNavigator.Screen name="Profile" component={Profile} />
  </TabsNavigator.Navigator>
);

const Main = createStackNavigator();

export default () => (
  <Main.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerBackImage: () => <BackBtn />,
    }}
  >
    <Main.Screen
      name="Tabs"
      component={Tabs}
      options={{ headerShown: false }}
    />
    <Main.Screen
      name="RoomDetail"
      component={Room}
      options={{
        headerTransparent: true,
        headerBackground: () => (
          <BlurView
            tint="light"
            intensity={80}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    />
  </Main.Navigator>
);
