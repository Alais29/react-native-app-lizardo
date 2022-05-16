import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
  },
  image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: Dimensions.get("screen").height * 0.18,
  },
});
