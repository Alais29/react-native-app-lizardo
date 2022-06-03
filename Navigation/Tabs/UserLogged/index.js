import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import HomeStack from "../../Stacks/Home";

import { styles } from "./styles";

const BottomTabs = createBottomTabNavigator();

const UserLogged = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Feather name="home" size={24} color="black" />
                <Text>Home</Text>
              </View>
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default UserLogged;
