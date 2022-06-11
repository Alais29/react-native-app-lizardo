import { DefaultTheme } from 'react-native-paper';

export const colors = {
  primaryDark: '#562505',
  secondaryDark: '#F9DC5C',
  tertiaryDark: '#1C0E05',
  primaryLight: '#A25F09',
  secondaryLight: '#031D44',
  tertiaryLight: '#C99E3A',
  light: '#bdbdbd',
  dark: '#2d2d2d',
};

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primaryDark,
    accent: colors.secondaryDark,
    background: colors.tertiaryDark,
    surface: colors.primaryLight,
    text: colors.dark,
    header: colors.light,
  },
};

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primaryLight,
    accent: colors.secondaryLight,
    background: colors.tertiaryLight,
    surface: colors.primaryDark,
    text: colors.light,
    header: colors.dark,
  },
};
