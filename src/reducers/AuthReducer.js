const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'email_changed':
      return { ...state, email: payload };
    case 'password_changed':
      return { ...state, password: payload };
    default:
      return state;
  }
};
