import React from "react";
import { useSelector } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { darkTheme, lightTheme } from "../Styles/colors";
import { Theme } from "../Features/interfaces";
import UserLogged from "./Tabs/UserLogged";
import AuthStack from "./Stacks/Auth";

const MainNavigation = () => {
  const { theme } = useSelector((state) => state.theme);
  const appTheme = theme === Theme.dark ? darkTheme : lightTheme;
  const loggedin = false;
  return (
    <PaperProvider theme={appTheme}>
      <NavigationContainer>
        {loggedin ? <UserLogged /> : <AuthStack />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default MainNavigation;
