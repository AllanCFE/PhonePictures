import React from 'react';
import Home from '../Home';
import Directors from '../Directors';
import { Switch, Route } from 'react-router-dom';

export default () => {
   return (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/directors' component={Directors}/>
        </Switch>
    </main>
   );
}