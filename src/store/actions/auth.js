import * as actionTypes from './action-types';

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart(email, password));
  };
};
