import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    UPDATE_CART,
} from '../types';

function addProduct(product) {
    return (dispatch, getState) => {
        const { cart } = getState();
        const productExists = cart?.find((p) => p._id === product._id);
        const quantityIsChanged = cart?.find((p) => p.quantity !== product.quantity);

        // if product is already on cart, but quantity is updated.
        if (productExists && quantityIsChanged) {
            cart[cart.findIndex((x) => x._id === product._id)] = product;
            dispatch(updateCart(cart));
            return;
        }

        // if product is on cart.
        if (productExists && !quantityIsChanged) return;

        dispatch({
            type: ADD_PRODUCT,
            product,
        });
    };
}

function removeProduct(index) {
    return {
        type: REMOVE_PRODUCT,
        index,
    };
}

function updateCart(payload) {
    return (dispatch) => {
        dispatch({ type: UPDATE_CART, payload });
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

export { addProduct, removeProduct, increseQuantity, decreaseQuantity, updateCart };
