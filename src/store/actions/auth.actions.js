import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from '../types';
import { Axios } from '../../configs';

function authStart() {
  return {
    type: AUTH_START,
  };
}

function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token: token,
  };
}

function authFail(error) {
  return {
    type: AUTH_FAIL,
    error,
  };
}

export const auth = (payload) => async (dispatch) => {
  dispatch(authStart());
  try {
    const { data } = await Axios.post('/auth/login', payload);
    if (!data.success) return console.log('error');
    dispatch(authSuccess(data.data.token));
  } catch (error) {
    if (error.response && error.response.data.message)
      return dispatch(authFail(error.response.data.message));

    dispatch(authFail("Can't access server right now! Try again later"));
  }
};
