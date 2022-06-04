import React from "react";
import { useSelector } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { darkTheme, lightTheme } from "../Styles/colors";
import UserLogged from "./Tabs/UserLogged";

const MainNavigation = () => {
  const { theme } = useSelector((state) => state.theme);
  const appTheme = theme === "dark" ? darkTheme : lightTheme;
  return (
    <PaperProvider theme={appTheme}>
      <NavigationContainer>
        <UserLogged />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default MainNavigation;
