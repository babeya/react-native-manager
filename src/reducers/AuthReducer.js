import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload };
    case PASSWORD_CHANGED:
      return { ...state, password: payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: '',
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: payload.message,
        loading: false,
        password: '',
      };
    default:
      return state;
  }
};
