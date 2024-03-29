import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

import { styles } from './styles';

const Button = ({
  children,
  customBtnStyles,
  onPress = () => {},
  disabled = false,
  color = 'background',
}) => {
  const { colors } = useTheme();
  const btnStyles = [
    { backgroundColor: colors[color] },
    styles.btn,
    customBtnStyles,
  ];

  if (disabled) {
    btnStyles.push({ backgroundColor: colors.disabled });
  }
  return (
    <TouchableOpacity style={btnStyles} onPress={onPress} disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['background', 'surface']),
  customBtnStyles: PropTypes.object,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
