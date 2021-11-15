import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, REGISTER_START, REGISTER_FAIL, REGISTER_SUCCESS } from '../types';
import { Axios } from '../../configs/configs';

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
        localStorage.setItem('accessToken', data.data.token);
    } catch (error) {
        if (error.response && error.response.data.message) return dispatch(authFail(error.response.data.message));

        dispatch(authFail("Can't access server right now! Try again later"));
    }
};

function registerStart() {
    return {
        type: REGISTER_START,
    };
}

function registerSuccess(payload) {
    return {
        type: REGISTER_SUCCESS,
        payload,
    };
}

function registerFail(error) {
    return {
        type: REGISTER_FAIL,
        error,
    };
}

export const registerUser = (data) => async (dispatch) => {
    console.log('register', data);
    dispatch(registerStart());
    try {
        const response = await Axios.post('/users', data);
        console.log(response);
        if (response.status === 201) return dispatch(registerSuccess(response.data.data));
        dispatch(registerFail('Something Went Wrong!'));
    } catch (error) {
        console.log(error);
        console.log(error.response?.data?.message);
        if (error.response?.data?.message) return dispatch(registerFail(error.response?.data?.message));

        dispatch(registerFail('Something Went Wrong'));
    }
};
