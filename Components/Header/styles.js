import { StyleSheet, StatusBar } from "react-native";
import { colors } from "../../Styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight + 10 || 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfo: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
