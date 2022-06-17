import { DefaultTheme, configureFonts } from 'react-native-paper';

import { colors } from './colors';
import { fontConfig } from './fonts';

export const darkTheme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
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
  fonts: configureFonts(fontConfig),
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
