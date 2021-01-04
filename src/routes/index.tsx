import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Player from '../pages/Sound';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/player" exact component={Player} />
        </Switch>
    );
};

export default Routes;
