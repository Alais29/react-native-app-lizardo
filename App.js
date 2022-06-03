import React from "react";
import { Provider } from "react-redux";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./Store/store";
import MainNavigation from "./Navigation";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
