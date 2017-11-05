import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(email) {
    this.props.emailChanged(email);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  onButtonPress() {
    const user = this.props;

    this.props.loginUser(user);
  }

  renderButton() {
    if (this.props.loading) {
      return (<Spinner />);
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent:'center' }}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@email.com"
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Password"
              placeholder="password"
              value={this.props.password}
              onChangeText={this.onPasswordChange.bind(this)}
              secureTextEntry
            />
          </CardSection>
        </Card>
        <Text style={{ color: '#ff0000' }}>
          {this.props.error}
        </Text>
        { this.renderButton() }
      </View>
    );
  }
}

LoginForm.propTypes = {
  emailChanged: PropTypes.func.isRequired,
  passwordChanged: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth }) => ({ ...auth });

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);

