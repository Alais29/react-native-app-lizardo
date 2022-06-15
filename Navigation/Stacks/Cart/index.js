import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTheme } from 'react-native-paper';

import AddressScreen from '../../../Screens/Address';
import CartScreen from '../../../Screens/Cart';
import SetNewAddressScreen from '../../../Screens/SetNewAddress';

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
      <Stack.Screen
        name="Addresses"
        component={AddressScreen}
        options={{ title: 'Delivery address' }}
      />
      <Stack.Screen
        name="SetNewAddress"
        component={SetNewAddressScreen}
        options={{ title: 'Set an Address' }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
