import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AuthMainScreen from '../../../Screens/AuthMain';
import SignUpLogin from '../../../Screens/SignUpLogin';
import UpdateProfile from '../../../Screens/UpdateProfile';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthMain" component={AuthMainScreen} />
      <Stack.Screen name="SignUpLogin" component={SignUpLogin} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
    </Stack.Navigator>
  );
};

export default AuthStack;
