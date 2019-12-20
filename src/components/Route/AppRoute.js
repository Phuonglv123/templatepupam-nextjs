import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {PostRoutes} from "./routes";
import Post from "../Post/Post";
import AllRoutes from "./AllRoutes";

type Props = {}

class AppRoute extends Component<Props> {
    render() {
        return (
            <Router>
                <Switch>
                    {PostRoutes.map((i, index) =>
                        <Route exact={i.exact} key={index} path={i.path} render={() => <Post route={i}/>}/>
                    )}
                    <Route path={'/all-routes/'} component={AllRoutes}/>
                </Switch>
            </Router>
        )
    }
}

export default AppRoute;
