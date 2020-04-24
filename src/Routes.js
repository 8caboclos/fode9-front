import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                    <Route path="/account" component="{}" />
                        <Route path="/account/settings" component="{}" />
                        <Route path="/account/favorite-videos" component="{}" />
                    <Route path="/video/:id" component="{}" />
                    <Route path="/tags" component="{}" />
                <Route path="*" component="{}" />
            </Switch>
        </BrowserRouter>
    )
}