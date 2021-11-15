import { SUBMIT_ORDER_START, SUBMIT_ORDER_SUCCESS, SUBMIT_ORDER_FAIL } from '../types';

const initialState = {
    submitedOrder: null,
    loading: false,
    error: null,
    orders: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_ORDER_START:
            return {
                ...state,
                loading: true,
            };
        case SUBMIT_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                submitedOrder: action.payload,
            };
        case SUBMIT_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default reducer;
