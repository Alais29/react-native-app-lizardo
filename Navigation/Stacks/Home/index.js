import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

import HomeScreen from '../../../Screens/Home';
import ProductDetailScreen from '../../../Screens/ProductDetail';
import { truncate } from '../../../utils/truncate';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { colors } = useTheme();
  const { productSelected } = useSelector(state => state.products);

  const productTitle = productSelected.name
    ? truncate(productSelected.name, 22)
    : '';

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.header,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          width: Dimensions.get('screen').width,
          fontFamily: 'Acme',
          fontSize: 25,
        },
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
        options={{ title: productTitle }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
