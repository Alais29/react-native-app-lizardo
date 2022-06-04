import React from "react";
import { View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackActions } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import HomeStack from "../../Stacks/Home";
import SettingsStack from "../../Stacks/Settings";

import { styles } from "./styles";

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
          borderTopColor: "transparent",
        },
      }}
    >
      <BottomTabs.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Feather name="home" size={24} color={colors.text} />
              </View>
            );
          },
        }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            // Reset Home stack
            navigation.navigate("Home");
          },
        })}
      />
      <BottomTabs.Screen
        name="SettingsTab"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
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
