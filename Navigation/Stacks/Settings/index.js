import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../../../Screens/Settings";
import { useTheme } from "react-native-paper";

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.header,
        // headerTitleStyle: {
        //   fontFamily: "Nunito",
        //   fontSize: 25,
        // },
        headerTitleAlign: "center",
        // headerRight: () => <LogOutBtn />,
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
