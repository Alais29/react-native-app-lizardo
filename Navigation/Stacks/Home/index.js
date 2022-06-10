import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import { useSelector } from "react-redux";
import HomeScreen from "../../../Screens/Home";
import ProductDetailScreen from "../../../Screens/ProductDetail";
import UpdateProfile from "../../../Screens/UpdateProfile";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { colors } = useTheme();
  const { productSelected } = useSelector((state) => state.products);
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        headerTitleStyle: { width: Dimensions.get("window").width },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductHome"
        component={ProductDetailScreen}
        options={{ title: productSelected.name }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
