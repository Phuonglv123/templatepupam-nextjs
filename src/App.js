import React, {Component} from 'react';
import './App.css';
import AppRoute from "./components/Route/AppRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyHeader from "./components/MyHeader/MyHeader";

class App extends Component {
    render() {
        return (
            <AppRoute/>
        )
    }
}

export default App;
