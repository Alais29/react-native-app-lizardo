import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import { styles } from './styles';

const Link = ({ text, textColor, customStyle = {}, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      style={[styles.linkContainer, customStyle]}
      onPress={onPress}
    >
      <Text style={{ ...styles.link, color: textColor }}>{text}</Text>
    </TouchableOpacity>
  );
};

Link.propTypes = {
  customStyle: PropTypes.object,
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Link;
