import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Card, Button, Input } from './common';

class EmployeeCreate extends Component {
  propChanged(prop, value) {
    this.props.employeeUpdate({ prop, value });
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Name"
              value={this.props.name}
              placeholder="John"
              onChangeText={this.propChanged.bind(this, 'name')}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Phone"
              value={this.props.phone}
              placeholder="+33 X XX XX XX XX"
              onChangeText={this.propChanged.bind(this, 'phone')}
            />
          </CardSection>
          <CardSection>
          </CardSection>
        </Card>
        <Button>
          Create
        </Button>
      </View>
    );
  }
}

EmployeeCreate.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
  employeeUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
