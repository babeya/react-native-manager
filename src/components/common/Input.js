import React from 'react';
import PropType from 'prop-types';
import { TextInput, View, Text } from 'react-native';
import { InputStyles } from './styles';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  const { inputStyle, labelStyle, containerStyle } = InputStyles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}> { label } </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

Input.propTypes = {
  label: PropType.string,
  value: PropType.string,
  onChangeText: PropType.func,
  placeholder: PropType.string,
  secureTextEntry: PropType.bool,
};

Input.defaultProps = {
  label: '',
  value: '',
  onChangeText: () => {},
  placeholder: '',
  secureTextEntry: false,
};

// eslint-disable-next-line import/prefer-default-export
export { Input };
