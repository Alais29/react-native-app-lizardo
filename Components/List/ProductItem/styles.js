import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 220,
  },
  backgroundImageSize: {
    flex: 1,
  },
  backgroundImage: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 8,
    borderWidth: 2,
  },
  gameInfoContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 15,
    position: "relative",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 220,
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 8,
  },
  platforms: {
    flexDirection: "row",
  },
  platform: {
    marginRight: 7,
  },
  title: {
    color: "white",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    color: "white",
  },
});
