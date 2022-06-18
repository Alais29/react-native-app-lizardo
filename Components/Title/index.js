import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

import { styles } from './styles';

const Title = ({ children }) => {
  const { colors: colorsTheme } = useTheme();

  return (
    <View style={styles.titleContainer}>
      <View
        style={{
          ...styles.titleTextContainer,
          backgroundColor: colorsTheme.surface,
        }}
      >
        <Text style={styles.text}>{children}</Text>
      </View>
      <View style={styles.trianglesContainer}>
        <View
          style={{
            ...styles.topTriangle,
            backgroundColor: colorsTheme.background,
          }}
        />
      </View>
    </View>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
