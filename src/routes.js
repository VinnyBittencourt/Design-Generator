import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Dashboard' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}
