import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from './screens/HomePage';
import Login from './screens/Login';
import Product from './screens/Product';
import Checkout from './screens/Checkout';

function Routes() {
    return (
        <>
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/login' component={Login} />
                <Route path='/product/:id' component={Product} />
                <Route path='/checkout' component={Checkout} />
                <Redirect to='/home' />
            </Switch>
        </>
    );
}

export default Routes;
