import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainerNews: {
    height: 295,
    justifyContent: "center",
  },
  emptyContainerGames: {
    height: 230,
    justifyContent: "center",
  },
  gamesContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 75,
  },
  newsContainer: {
    flex: 1,
    alignItems: "center",
  },
  topProductsContainer: {
    alignItems: "center",
    flex: 1,
  },
  errorTextContainer: {
    borderRadius: 10,
    padding: 10,
  },
  errorText: {
    textAlign: "center",
  },
});
