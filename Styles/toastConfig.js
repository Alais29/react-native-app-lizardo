import { BaseToast, ErrorToast } from 'react-native-toast-message';

import { Theme } from '../Features/interfaces';
import { colors } from './colors';

export const getToastConfig = theme => {
  return {
    success: props => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: '#13AD9B',
          backgroundColor: theme === Theme.dark ? colors.dark : colors.light,
        }}
        text1Style={{
          color: theme === Theme.dark ? colors.light : colors.dark,
        }}
        text2Style={{
          color: theme === Theme.dark ? colors.light : colors.dark,
        }}
      />
    ),
    error: props => (
      <ErrorToast
        {...props}
        style={{
          borderLeftColor: '#910303',
          backgroundColor: theme === Theme.dark ? colors.dark : colors.light,
        }}
        text1Style={{
          color: theme === Theme.dark ? colors.light : colors.dark,
        }}
        text2Style={{
          color: theme === Theme.dark ? colors.light : colors.dark,
        }}
      />
    ),
  };
};
