import { combineReducers } from 'redux';
import userReducer from './user.reducer.js';
import productsReducer from './products.reducer';
import authReducer from './auth.reducer';
import cart from './cart.reducer';

const rootReducer = combineReducers({
    users: userReducer,
    products: productsReducer,
    auth: authReducer,
    cart,
});

export default rootReducer;
