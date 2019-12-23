import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MyHeader extends Component {
    render() {
        const style = {
            fontSize: 20,
            fontWeight: 500,
            color: 'white'
        };
        return (
            <nav id='bg-custom' className="navbar navbar-expand-md  navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="/" style={style}>G SuiteX</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" style={style} href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={style} href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={style} href="#feature">Feature</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={style} href="#pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={style} href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={style} href="https://gsuitex.pupam.com/login/"
                                   target='_blank'>Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={style} href="#">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MyHeader;
