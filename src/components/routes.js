import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home';

const Routes = function () {
    return (
        <div>
            <Route path="/" exact component={Home} />
        </div>
    );
}

export default Routes;