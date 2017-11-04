// Import a library to  help create a component
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { HeaderStyles } from './styles';

// Make a components
const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = HeaderStyles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {headerText} </Text>
    </View>
  );
};

Header.propTypes = {
  headerText: PropTypes.string,
};

Header.defaultProps = {
  headerText: '',
};


// eslint-disable-next-line import/prefer-default-export
export { Header };
