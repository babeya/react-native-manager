import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { CardSectionStyles } from './styles';

const CardSection = props => (
  <View style={CardSectionStyles.containerStyle}>
    { props.children }
  </View>
);

CardSection.propTypes = {
  children: PropTypes.node,
};

CardSection.defaultProps = {
  children: null,
};

// eslint-disable-next-line import/prefer-default-export
export { CardSection };
