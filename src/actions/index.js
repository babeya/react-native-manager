import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';

export const emailChanged = email => (
  { type: EMAIL_CHANGED, payload: email }
);

export const passwordChanged = password => (
  { type: PASSWORD_CHANGED, payload: password }
);

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.employeeList();
};

const loginUserFailed = (dispatch, error) => (
  dispatch({ type: LOGIN_USER_FAIL, payload: error })
);

export const loginUser = ({ email, password }) => (
  (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(error => loginUserFailed(dispatch, error));
      });
  }
);
