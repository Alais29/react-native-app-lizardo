import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import MainNavigation from "./Navigation";

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
