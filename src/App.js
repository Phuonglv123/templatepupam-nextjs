import React, {Component} from 'react';
import './App.scss';
import AppRoute from "./components/Route/AppRoute";
import MyFooter from "./components/MyFooter/MyFooter";

class App extends Component {
    render() {
        return (
            <div>
                <MyFooter/>
                <AppRoute/>
            </div>
        )
    }
}

export default App;
