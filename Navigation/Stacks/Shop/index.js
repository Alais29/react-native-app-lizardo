import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

import CategoriesScreen from '../../../Screens/Categories';
import ProductDetailScreen from '../../../Screens/ProductDetail';
import ProductsScreen from '../../../Screens/Products';
import { truncate } from '../../../utils/truncate';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  const { categorySelected } = useSelector(state => state.categories);
  const { productSelected } = useSelector(state => state.products);
  const { colors } = useTheme();

  const productTitle = productSelected.name
    ? truncate(productSelected.name, 22)
    : '';

  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.header,
        headerTitleStyle: {
          fontFamily: 'Acme',
          fontSize: 25,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{ title: categorySelected.name }}
      />
      <Stack.Screen
        name="ProductShop"
        component={ProductDetailScreen}
        options={{ title: productTitle }}
      />
    </Stack.Navigator>
  );
};

export default ShopStack;
