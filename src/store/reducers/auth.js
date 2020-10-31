import * as actionTypes from '../actions/action-types';

const initialState = {
    uid: null
}

const authStart = (state, action) => {
    console.log('authenticating');
    return state
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        default: return state;
    }
}

export default authReducer;