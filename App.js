import React from "react";
import { StyleSheet, View, useColorScheme } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
// import Categories from "./Screens/Categories";
import HomeScreen from "./Screens/Home";
import { darkTheme, lightTheme } from "./Styles/colors";

const App = () => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={theme}>
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <HomeScreen />
      </View>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
