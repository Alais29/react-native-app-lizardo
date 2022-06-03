import { View } from "react-native";
import { useTheme } from "react-native-paper";
import React from "react";

import { styles } from "./styles";

const ScreenContainer = ({ children }) => {
  const { colors } = useTheme();
  return (
    <View
      style={[styles.mainContainer, { backgroundColor: colors.background }]}
    >
      {children}
    </View>
  );
};

export default ScreenContainer;
