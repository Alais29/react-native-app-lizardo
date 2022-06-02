import React from "react";
import { StyleSheet, View, useColorScheme } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { store } from "./Store/store";
import HomeScreen from "./Screens/Home";
import { darkTheme, lightTheme } from "./Styles/colors";

const App = () => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? darkTheme : lightTheme;

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaView
          style={[
            styles.container,
            { backgroundColor: theme.colors.background },
          ]}
        >
          <HomeScreen />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
