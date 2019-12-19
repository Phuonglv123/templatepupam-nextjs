import React, {Component} from 'react';

type Props = {}

class Home extends Component<Props> {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }

    componentDidMount(): void {
        console.log('componentDidMount');
    }
}

export default Home;
