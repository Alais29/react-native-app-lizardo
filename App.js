import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import MainNavigation from "./Navigation";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Database/firebase";

initializeApp(firebaseConfig);

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
