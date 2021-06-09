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

function getOneSuccess(payload, comments) {
    return {
        type: actionTypes.GET_ONE_PRODUCT_SUCCESS,
        payload,
        comments,
    };
}

function getOneFail(error) {
    return {
        type: actionTypes.GET_ONE_PRODUCT_FAIL,
        error,
    };
}

function postCommentStart() {
    return {
        type: actionTypes.ADD_COMMENT_START,
    };
}

function postCommentSuccess(payload) {
    return {
        type: actionTypes.ADD_COMMENT_SUCCESS,
        payload,
    };
}

function postCommentFail(error) {
    return {
        type: actionTypes.ADD_COMMENT_FAIL,
        error,
    };
}

export function getAllProducts() {
    return (dispatch) => {
        console.log('hi');
        dispatch(getAllStart());
        Axios.get('/products')
            .then(({ data }) => {
                if (!data.success)
                    return dispatch(getAllFail('Error fetching data!'));

                dispatch(getAllSuccess(data.data.products));
            })
            .catch((error) => {
                if (error.response?.data)
                    return dispatch(getAllFail(error.response.data.message));

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
                if (!data.success)
                    return dispatch(getOneFail('Error fetching data!'));
                dispatch(getOneSuccess(data.data.product, data.data.comments));
            })
            .catch((error) => {
                if (error.response && error.response.data.message)
                    return dispatch(getOneFail(error.response.data.message));

                dispatch(
                    getOneFail("Can't access server right now! Try again later")
                );
            });
    };
}

export const postComment = (postId, user, text) => (dispatch) => {
    dispatch(postCommentStart());
    Axios.post(`/products/${postId}/comment`, { user, text })
        .then(({ data }) => {
            if (!data.success)
                return dispatch(postCommentFail('Adding comment fail!'));

            dispatch(postCommentSuccess(data.data.comment));
        })
        .catch((error) => {
            if (error.response?.data)
                return dispatch(postCommentFail(error.response.data.message));

            if (error.message) return dispatch(postCommentFail(error.message));

            dispatch(postCommentFail(error.toString()));
        });
};

export function cleanProducts() {
    return {
        type: actionTypes.CLEAN_PRODUCTS,
    };
}
