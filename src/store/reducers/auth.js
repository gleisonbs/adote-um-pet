import * as actionTypes from '../actions/action-types';

const initialState = {
  uid: null,
};

const authStart = (state) => {
  return state;
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state);
    default:
      return state;
  }
};

export default authReducer;
