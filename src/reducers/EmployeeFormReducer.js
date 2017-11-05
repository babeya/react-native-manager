import {
  EMPLOYEE_UPDATE,
} from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [payload.prop]: payload.value };
    default:
      return state;
  }
};

