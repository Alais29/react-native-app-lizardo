import { View, TouchableOpacity } from "react-native";
import { useTheme, Text } from "react-native-paper";
import React from "react";

import { styles } from "./styles";

const Button = ({ children, onPress = () => {} }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={{ backgroundColor: colors.accent, ...styles.btn }}
      onPress={onPress}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
