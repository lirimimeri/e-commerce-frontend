import { combineReducers } from 'redux';
import userReducer from './user.reducer.js';
import productsReducer from './products.reducer';
import authReducer from './auth.reducer';
import cartReducer from './cart.reducer';
import ordersReducer from './order.reducer';

const rootReducer = combineReducers({
    users: userReducer,
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
    orders: ordersReducer,
});

export default rootReducer;
