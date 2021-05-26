import {
    GET_ALL_PRODUCTS_FAIL,
    GET_ALL_PRODUCTS_START,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ONE_PRODUCT_FAIL,
    GET_ONE_PRODUCT_START,
    GET_ONE_PRODUCT_SUCCESS,
} from '../types';

const initialState = {
    loading: false,
    errorMessage: null,
    productsData: null,
    productData: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS_START:
            return { ...state, loading: true };
        case GET_ALL_PRODUCTS_SUCCESS:
            return { ...state, loading: false, productsData: action.payload };
        case GET_ALL_PRODUCTS_FAIL:
            return { ...state, loading: false, errorMessage: action.error };
        case GET_ONE_PRODUCT_START:
            return { ...state, loading: true };
        case GET_ONE_PRODUCT_SUCCESS:
            return { ...state, productData: action.payload };
        case GET_ONE_PRODUCT_FAIL:
            return { ...state, loading: false, errorMessage: action.error };
        default:
            return state;
    }
};

export default reducer;
