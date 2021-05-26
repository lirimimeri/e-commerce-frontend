import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from '../types';

const initialState = {
  token: null,
  loading: false,
  errorMessage: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
        errorMessage: null,
      };
    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
}

export default reducer;
