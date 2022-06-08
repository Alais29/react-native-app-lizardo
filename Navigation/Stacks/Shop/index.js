import React from "react";
import { Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { truncate } from "../../../utils/truncate";
import CategoriesScreen from "../../../Screens/Categories";
import ProductsScreen from "../../../Screens/Products";
import ProductDetailScreen from "../../../Screens/ProductDetail";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  const { categorySelected } = useSelector((state) => state.categories);
  const { productSelected } = useSelector((state) => state.products);
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Categories"
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
        // headerTitleStyle: { width: Dimensions.get("window").width },
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen
        name={"Products"}
        component={ProductsScreen}
        options={{ title: categorySelected.name }}
      />
      <Stack.Screen
        name={"ProductShop"}
        component={ProductDetailScreen}
        options={{ title: truncate(productSelected.name, 22) }}
      />
    </Stack.Navigator>
  );
};

export default ShopStack;
