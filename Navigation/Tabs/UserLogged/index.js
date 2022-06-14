import { Feather, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

import CartStack from '../../Stacks/Cart';
import HomeStack from '../../Stacks/Home';
import SettingsStack from '../../Stacks/Settings';
import ShopStack from '../../Stacks/Shop';
import { styles } from './styles';

const BottomTabs = createBottomTabNavigator();

const UserLogged = () => {
  const { colors } = useTheme();
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tabBar,
          backgroundColor: colors.surface,
          borderTopColor: 'transparent',
        },
        unmountOnBlur: true,
      }}
    >
      <BottomTabs.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...styles.item,
                  borderTopColor: focused ? colors.primary : colors.surface,
                }}
              >
                <Feather name="home" size={24} color={colors.text} />
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...styles.item,
                  borderTopColor: focused ? colors.primary : colors.surface,
                }}
              >
                <Entypo name="shop" size={24} color={colors.text} />
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...styles.item,
                  borderTopColor: focused ? colors.primary : colors.surface,
                }}
              >
                <Feather name="shopping-bag" size={24} color={colors.text} />
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="SettingsTab"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...styles.item,
                  borderTopColor: focused ? colors.primary : colors.surface,
                }}
              >
                <Feather name="settings" size={24} color={colors.text} />
              </View>
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default UserLogged;
