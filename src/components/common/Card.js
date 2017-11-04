import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { CardStyles } from './styles';

const Card = props => (
  <View style={CardStyles.containerStyle}>
    {props.children}
  </View>
);

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: null,
};

// eslint-disable-next-line import/prefer-default-export
export { Card };
