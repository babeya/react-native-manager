import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

import { SpinnerStyles } from './styles';

const Spinner = ({ size }) => (
  <View style={SpinnerStyles.spinnerStyles}>
    <ActivityIndicator size={size || 'large'} />
  </View>
);

Spinner.propTypes = {
  size: PropTypes.oneOf(['large', 'small']),
};

Spinner.defaultProps = {
  size: 'large',
};

// eslint-disable-next-line import/prefer-default-export
export { Spinner };
