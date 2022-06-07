import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    borderWidth: 0,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 5,
    paddingHorizontal: 5,
  },
});
