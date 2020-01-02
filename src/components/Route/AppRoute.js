import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {PostRoutes} from "./routes";
import Post from "../Post/Post";
import AllRoutes from "./AllRoutes";
import MyHeader from "../MyHeader/MyHeader";
import SidebarFeature from "../SidebarFeature/SidebarFeature";

type Props = {}

class AppRoute extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            drawer: false
        }
    }

    render() {
        const drawer = {
            position: 'fixed',
            width: this.state.drawer ? 250 : 0,
            backgroundColor: '#fff',
            top: 0,
            height: '100%',
            boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
        };

        return (
            <Router>
                <MyHeader drawer={() => {
                    this.setState({drawer: !this.state.drawer})
                }}/>
                <div>
                    <Switch>
                        {PostRoutes.map((i, index) =>
                            <Route exact={i.exact} key={index} path={i.path} render={() => <Post route={i}/>}/>
                        )}
                        <Route path={'/all-routes/'} component={AllRoutes}/>
                    </Switch>
                </div>

                {this.state.drawer && <div style={drawer}>
                    <SidebarFeature/>
                </div>}
            </Router>
        )
    }
}

export default AppRoute;
