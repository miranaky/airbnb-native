import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screen/Welcome";
import SignUp from "../screen/SignUp";
import SignIn from "../screen/SignIn";
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
    <Auth.Screen name="Sign In" component={SignIn} />
    <Auth.Screen name="Sign Up" component={SignUp} />
  </Auth.Navigator>
);
