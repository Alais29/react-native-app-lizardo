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
  const { user } = useSelector((state) => state.auth);
  const appTheme = theme === Theme.dark ? darkTheme : lightTheme;
  return (
    <PaperProvider theme={appTheme}>
      <NavigationContainer>
        {user.displayName ? <UserLogged /> : <AuthStack />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default MainNavigation;
