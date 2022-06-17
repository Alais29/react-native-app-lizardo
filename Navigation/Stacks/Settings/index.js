import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTheme } from 'react-native-paper';

import SettingsScreen from '../../../Screens/Settings';

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
        headerTitleStyle: {
          fontFamily: 'Acme',
          fontSize: 25,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
