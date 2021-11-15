import { Axios } from '../../configs/configs';
import { SUBMIT_ORDER_FAIL, SUBMIT_ORDER_START, SUBMIT_ORDER_SUCCESS } from '../types';

function submitOrderStart() {
    return {
        type: SUBMIT_ORDER_START,
    };
}

function submitOrderSuccess(payload) {
    return {
        type: SUBMIT_ORDER_SUCCESS,
        payload,
    };
}

function submitOrderFail(error) {
    return {
        type: SUBMIT_ORDER_FAIL,
        error,
    };
}

export const submitOrder = (data) => (dispatch) => {
    dispatch(submitOrderStart());
    Axios.post('/orders', data)
        .then(({ data }) => {
            if (!data.success)
                return dispatch(submitOrderFail(data.message || 'Something went wrong!'));

            dispatch(submitOrderSuccess(data.data.order));
        })
        .catch((err) => {
            if (err.response?.data?.message)
                return dispatch(submitOrderFail(err.response.data.message));

            dispatch(submitOrderFail('Something went wrong!'));
        });
};
