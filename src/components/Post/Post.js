import React, {Component} from 'react';
import type {RouteItem} from "../Route/type";
import {Helmet} from "react-helmet";

type Props = {
    route: RouteItem,
}

class Post extends Component<Props> {
    render() {
        const route = this.props.route;
        return (
            <div>
                <Helmet>
                    <title>{route.title}</title>
                </Helmet>
                {React.createElement(route.content)}
            </div>
        )
    }
}

export default Post;
