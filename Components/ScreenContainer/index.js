import PropTypes from 'prop-types';
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

ScreenContainer.propTypes = {
  children: PropTypes.node.isRequired,
  paddingBottom: PropTypes.bool,
};

export default ScreenContainer;
