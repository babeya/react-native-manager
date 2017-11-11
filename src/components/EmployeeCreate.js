import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { CardSection, Card, Button, Input } from './common';

const styles = { // TODO : externalize
  pickerContainerStyle: {
    flexDirection: 'row',
  },
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
};

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift });
  }

  propChanged(prop, value) {
    this.props.employeeUpdate({ prop, value });
  }

  render() {
    const { pickerLabelStyle, pickerContainerStyle } = styles;

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
          <CardSection style={pickerContainerStyle}>
            <Text style={pickerLabelStyle} >
              Shift
            </Text>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.shift}
              onValueChange={this.propChanged.bind(this, 'shift')}
            >
              <Picker.Item label="Monday" value="monday" />
              <Picker.Item label="Tuesday" value="tuesday" />
              <Picker.Item label="Wednesday" value="wednesday" />
              <Picker.Item label="Thursday" value="thursday" />
              <Picker.Item label="Friday" value="friday" />
            </Picker>
          </CardSection>
        </Card>
        <Button onPress={this.onButtonPress}>
          Create
        </Button>
      </View>
    );
  }
}

EmployeeCreate.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  shift: PropTypes.oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday']),
  employeeUpdate: PropTypes.func.isRequired,
  employeeCreate: PropTypes.func.isRequired,
};

EmployeeCreate.defaultProps = {
  shift: 'monday',
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate,
})(EmployeeCreate);
