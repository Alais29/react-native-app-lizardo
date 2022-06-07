import { View } from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";

import { styles } from "./styles";

const ErrorMessage = ({
  errorMessage = "An error occured",
  search = false,
}) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        backgroundColor: colors.surface,
        ...styles.errorTextContainer,
      }}
    >
      <Text style={styles.errorText}>{errorMessage}</Text>
      {!search ? (
        <Text style={styles.errorText}>Please try again later</Text>
      ) : null}
    </View>
  );
};

export default ErrorMessage;
