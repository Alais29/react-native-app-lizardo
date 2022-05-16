import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import React from "react";

import { styles } from "./styles";

const Title = ({ children }) => {
  const { colors: colorsTheme } = useTheme();

  return (
    <View style={styles.titleContainer}>
      <View
        style={{
          ...styles.titleTextContainer,
          backgroundColor: colorsTheme.surface,
        }}
      >
        <Text style={styles.text}>{children}</Text>
      </View>
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
