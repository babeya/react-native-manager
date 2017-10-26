import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBGY0q_iHbJgXPHO7iiX4F0YONOC32r8Ik',
      authDomain: 'manager-ccb5f.firebaseapp.com',
      databaseURL: 'https://manager-ccb5f.firebaseio.com',
      projectId: 'manager-ccb5f',
      storageBucket: '',
      messagingSenderId: '690033610531',
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
