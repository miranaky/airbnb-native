import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screen/Auth/Welcome";
import SignUp from "../screen/Auth/SignUp";
import SignIn from "../screen/Auth/SignIn";
import BackBtn from "../components/Auth/BackBtn";

const Auth = createStackNavigator();

export default () => (
  <Auth.Navigator
    headerMode="float"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerBackImage: () => <BackBtn />,
    }}
  >
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerTitleStyle: { color: "white" } }}
    />
    <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    <Auth.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: "Sign Up" }}
    />
  </Auth.Navigator>
);
