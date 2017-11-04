import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonStyles } from './styles';

const Button = ({ onPress, children }) => {
  const { textStyle, buttonStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle} >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
