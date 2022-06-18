import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';

import { Theme } from '../Features/interfaces';
import { darkTheme, lightTheme } from '../Styles/themes';
import { getToastConfig } from '../Styles/toastConfig';
import AuthStack from './Stacks/Auth';
import UserLogged from './Tabs/UserLogged';

const MainNavigation = () => {
  const { theme } = useSelector(state => state.theme);
  const { user } = useSelector(state => state.auth);
  const appTheme = theme === Theme.dark ? darkTheme : lightTheme;

  const toastConfig = getToastConfig(theme);

  return (
    <PaperProvider theme={appTheme}>
      <NavigationContainer>
        {user.displayName ? <UserLogged /> : <AuthStack />}
      </NavigationContainer>
      <Toast config={toastConfig} />
    </PaperProvider>
  );
};

export default MainNavigation;
