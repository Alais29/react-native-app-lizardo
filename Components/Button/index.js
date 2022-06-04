import { View, TouchableOpacity } from "react-native";
import { useTheme, Text } from "react-native-paper";
import React from "react";

import { styles } from "./styles";

const Button = ({ children, onPress = () => {}, disabled = false }) => {
  const { colors } = useTheme();
  const btnStyles = [{ backgroundColor: colors.accent }, styles.btn];

  if (disabled) {
    btnStyles.push({ backgroundColor: colors.disabled });
  }
  return (
    <TouchableOpacity style={btnStyles} onPress={onPress} disabled={disabled}>
      <Text style={{ color: disabled ? colors.header : colors.text }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
