import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../types';

function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product,
    };
}

function removeProduct(index) {
    return {
        type: REMOVE_PRODUCT,
        index,
    };
}

function increseQuantity(index) {
    return {
        type: INCREASE_QUANTITY,
        index,
    };
}

function decreaseQuantity(index) {
    return {
        type: DECREASE_QUANTITY,
        index,
    };
}

export { addProduct, removeProduct, increseQuantity, decreaseQuantity };
