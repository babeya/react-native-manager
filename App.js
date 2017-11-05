import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';

import LoginForm from './src/components/LoginForm';

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
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
