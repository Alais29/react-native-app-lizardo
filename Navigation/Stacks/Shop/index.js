import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../../../Screens/Categories";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Shop"
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
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};

export default ShopStack;
