import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../Styles/colors";

export const styles = StyleSheet.create({
  titleContainer: {
    width: Dimensions.get("screen").width * 0.9,
    flexDirection: "row",
    alignItems: "flex-start",
    position: "relative",
    marginVertical: 20,
  },
  text: {
    color: colors.light,
    paddingLeft: 10,
    paddingRight: 20,
    paddingVertical: 6,
    borderRadius: 8,
    fontSize: 18,
  },
  trianglesContainer: {
    height: 32,
    width: 16,
  },
  topTriangle: {
    position: "absolute",
    top: 5,
    right: 0,
    height: 24.6,
    width: 24.6,
    transform: [{ rotate: "45deg" }],
    borderRadius: 5,
  },
});
