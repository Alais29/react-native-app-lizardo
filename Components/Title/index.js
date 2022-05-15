import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import React from "react";

import { styles } from "./styles";

const Title = ({ children }) => {
  const { colors: colorsTheme } = useTheme();

  return (
    <View style={styles.titleContainer}>
      <Text
        style={{
          ...styles.text,
          backgroundColor: colorsTheme.surface,
        }}
      >
        {children}
      </Text>
      <View style={styles.trianglesContainer}>
        <View
          style={{
            ...styles.topTriangle,
            backgroundColor: colorsTheme.background,
          }}
        ></View>
      </View>
    </View>
  );
};

export default Title;
