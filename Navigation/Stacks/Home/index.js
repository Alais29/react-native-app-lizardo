import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "react-native-paper";
import HomeScreen from "../../../Screens/Home";
import ProductDetailScreen from "../../../Screens/ProductDetail";
import { useSelector } from "react-redux";

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
        name="Product"
        component={ProductDetailScreen}
        options={{ title: productSelected.name }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
