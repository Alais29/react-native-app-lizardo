import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

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

export default Link;
