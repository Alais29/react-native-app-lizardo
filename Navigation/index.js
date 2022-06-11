import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { Theme } from '../Features/interfaces';
import { darkTheme, lightTheme } from '../Styles/colors';
import AuthStack from './Stacks/Auth';
import UserLogged from './Tabs/UserLogged';

const MainNavigation = () => {
  const { theme } = useSelector(state => state.theme);
  const { user } = useSelector(state => state.auth);
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
