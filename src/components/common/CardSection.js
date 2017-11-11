/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { CardSectionStyles } from './styles';

const CardSection = ({ style, children }) => (
  <View style={[CardSectionStyles.containerStyle, style]}>
    { children }
  </View>
);

CardSection.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

CardSection.defaultProps = {
  children: null,
  style: {},
};

// eslint-disable-next-line import/prefer-default-export
export { CardSection };
