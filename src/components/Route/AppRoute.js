import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {PostRoutes} from "./routes";
import Post from "../Post/Post";
import AllRoutes from "./AllRoutes";
import MyHeader from "../MyHeader/MyHeader";

type Props = {}

class AppRoute extends Component<Props> {
    render() {
        return (
            <Router>
                <MyHeader/>
                <div>
                    <Switch>
                        {PostRoutes.map((i, index) =>
                            <Route exact={i.exact} key={index} path={i.path} render={() => <Post route={i}/>}/>
                        )}
                        <Route path={'/all-routes/'} component={AllRoutes}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default AppRoute;
