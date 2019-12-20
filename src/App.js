import React, {Component} from 'react';
import './App.scss';
import AppRoute from "./components/Route/AppRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyHeader from "./components/MyHeader/MyHeader";

class App extends Component {
    render() {
        return (
            <div>
                <MyHeader/>
                <AppRoute/>
            </div>
        )
    }
}

export default App;
