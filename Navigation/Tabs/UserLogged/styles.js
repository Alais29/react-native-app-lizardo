import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBarBlur: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 60,
    borderWidth: 0,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
