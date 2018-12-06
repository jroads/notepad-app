import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home';
import Add from './add';
import Edit from './edit';

const Routes = function () {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add" exact component={Add} />
            <Route path="/edit" exact component={Edit} />
        </Switch>
    );
}

export default Routes;