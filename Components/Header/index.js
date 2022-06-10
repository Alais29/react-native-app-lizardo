import { View } from "react-native";
import { Text, useTheme, Avatar, IconButton } from "react-native-paper";

import React from "react";

import { styles } from "./styles";
import { useSelector } from "react-redux";

const Header = ({ onPressSearch = () => {}, showSearch = true }) => {
  const { colors } = useTheme();
  const { user } = useSelector((state) => state.auth);
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Avatar.Image
          size={50}
          source={{ uri: user.photoUrl }}
          style={{ backgroundColor: colors.background }}
        />
        <View style={styles.userInfo}>
          <Text style={{ ...styles.title, color: colors.header }}>
            Hi, {user.displayName}
          </Text>
          <Text style={{ ...styles.subtitle, color: colors.header }}>
            Welcome back
          </Text>
        </View>
      </View>
      <View style={styles.icons}>
        {showSearch && (
          <IconButton
            icon="magnify"
            color={colors.header}
            size={24}
            onPress={onPressSearch}
          />
        )}
        <IconButton
          icon="shopping-outline"
          color={colors.header}
          size={24}
          onPress={() => console.log("Pressed")}
        />
      </View>
    </View>
  );
};

export default Header;
