import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthMainScreen from "../../../Screens/AuthMain";
import SignUp from "../../../Screens/SignUp";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthMain" component={AuthMainScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
