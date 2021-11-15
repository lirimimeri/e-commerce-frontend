// import { REGISTER_FAIL, REGISTER_START, REGISTER_SUCCESS } from '../types';
// import { Axios } from '../../configs/configs';

// function registerStart() {
//     return {
//         type: REGISTER_START,
//     };
// }

// function registerSuccess(payload) {
//     return {
//         type: REGISTER_SUCCESS,
//         payload,
//     };
// }

// function registerFail(error) {
//     return {
//         type: REGISTER_FAIL,
//         error,
//     };
// }

// export const registerUser = (data) => async (dispatch) => {
//     console.log('register', data);
//     dispatch(registerStart());
//     try {
//         const response = await Axios.post('/users', data);
//         console.log(response);
//         if (response.status === 201) return dispatch(registerSuccess(response.data.data));
//         dispatch(registerFail('Something Went Wrong!'));
//     } catch (error) {
//         console.log(error);
//         if (error.response?.data?.message) return dispatch(registerFail(error.response?.data?.message));

//         dispatch(registerFail('Something Went Wrong'));
//     }
// };
