import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { useTheme, Text } from "react-native-paper";

import { styles } from "./styles";

const Button = ({
  children,
  customBtnStyles,
  onPress = () => {},
  disabled = false,
  color = "background",
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

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(["background", "surface"]),
};
