import React, {Component} from 'react';
import {PostRoutes} from "./routes";
import {Link} from "react-router-dom";

type Props = {}

class AllRoutes extends Component<Props> {
    render() {
        return (
            <div>
                {PostRoutes.map((i, index) => <Link to={i.path} key={index}/>)}
            </div>
        )
    }
}

export default AllRoutes;
