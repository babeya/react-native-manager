import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonStyles } from './styles';

const Button = ({ onPress, children }) => {
  const { textStyle, buttonStyle } = ButtonStyles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle} >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  onPress: () => {},
  children: null,
};

// eslint-disable-next-line import/prefer-default-export
export { Button };
