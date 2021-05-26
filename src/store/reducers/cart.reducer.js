import { INCREASE_QUANTITY, DECREASE_QUANTITY, ADD_PRODUCT, REMOVE_PRODUCT } from '../types';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return state.concat(action.product);
        case REMOVE_PRODUCT:
            return state.splice(action.index, 1);
        case INCREASE_QUANTITY:
            return state[action.index]['quantity'] + 1;
        case DECREASE_QUANTITY:
            return state[action.index]['quantity'] - 1;
        default:
            return state;
    }
};

export default reducer;
