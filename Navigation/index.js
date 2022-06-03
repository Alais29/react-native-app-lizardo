import React from "react";
import { useColorScheme } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { darkTheme, lightTheme } from "../Styles/colors";
import UserLogged from "./Tabs/UserLogged";

const MainNavigation = () => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? darkTheme : lightTheme;
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <UserLogged />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default MainNavigation;
