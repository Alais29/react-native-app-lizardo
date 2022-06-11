import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

import { styles } from './styles';

const ScreenContainer = ({ children, paddingBottom = true }) => {
  const { colors } = useTheme();
  return (
    <View
      style={[
        styles.mainContainer,
        {
          backgroundColor: colors.background,
          paddingBottom: paddingBottom ? 60 : 0,
        },
      ]}
    >
      {children}
    </View>
  );
};

export default ScreenContainer;
