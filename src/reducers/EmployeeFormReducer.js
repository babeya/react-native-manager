import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
} from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: 'monday' };

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [payload.prop]: payload.value };
    case EMPLOYEE_CREATE:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

