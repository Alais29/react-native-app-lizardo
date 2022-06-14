import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTheme } from 'react-native-paper';

import CartScreen from '../../../Screens/Cart';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.header,
        // headerTitleStyle: {
        //   fontFamily: "Nunito",
        //   fontSize: 25,
        // },
        headerTitleAlign: 'center',
        // headerRight: () => <LogOutBtn />,
      }}
    >
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default CartStack;
