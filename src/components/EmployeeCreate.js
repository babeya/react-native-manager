import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection, Card, Button, Input } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input label="Name" placeholder="John" />
          </CardSection>
          <CardSection>
            <Input label="Phone" placeholder="+33 X XX XX XX XX" />
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

export default EmployeeCreate;
