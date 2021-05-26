import * as actionTypes from '../types';
import { Axios } from '../../configs';

function getAllStart() {
    return {
        type: actionTypes.GET_ALL_PRODUCTS_START,
    };
}

function getAllSuccess(payload) {
    return {
        type: actionTypes.GET_ALL_PRODUCTS_SUCCESS,
        payload,
    };
}

function getAllFail(error) {
    return {
        type: actionTypes.GET_ALL_PRODUCTS_FAIL,
        error,
    };
}

function getOneStart() {
    return {
        type: actionTypes.GET_ONE_PRODUCT_START,
    };
}

function getOneSuccess(payload) {
    return {
        type: actionTypes.GET_ONE_PRODUCT_SUCCESS,
        payload,
    };
}

function getOneFail(error) {
    return {
        type: actionTypes.GET_ONE_PRODUCT_FAIL,
        error,
    };
}

export function getAllProducts() {
    return (dispatch) => {
        console.log('hi');
        dispatch(getAllStart());
        Axios.get('/products')
            .then(({ data }) => {
                if (!data.success) return dispatch(getAllFail('Error fetching data!'));

                dispatch(getAllSuccess(data.data.products));
            })
            .catch((error) => {
                if (error.response?.data) return dispatch(getAllFail(error.response.data.message));

                if (error.message) return dispatch(getAllFail(error.message));

                dispatch(getAllFail(error.toString()));
            });
    };
}

export function getOneProduct(id) {
    return (dispatch) => {
        dispatch(getOneStart());
        Axios.get(`/products/${id}`)
            .then(({ data }) => {
                if (!data.success) return dispatch(getOneFail('Error fetching data!'));
                dispatch(getOneSuccess(data.data));
                console.log(data.data.product);
            })
            .catch((error) => {
                if (error.response && error.response.data.message)
                    return dispatch(getOneFail(error.response.data.message));

                dispatch(getOneFail("Can't access server right now! Try again later"));
            });
    };
}
