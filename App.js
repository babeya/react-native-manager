import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';

import { firebaseConfig } from './config';
import RouterComponent from './src/Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <RouterComponent/>
      </Provider>
    );
  }
}

export default App;
