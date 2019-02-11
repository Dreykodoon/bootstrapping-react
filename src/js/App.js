import React from 'react';
import {Transition} from 'react-transition-group';

import Button from './Button';
import Jumbotron from './Jumbotron';
import Container from './Container';


class App extends React.Component {
    state = {
        show: false
    };

    componentDidMount() {
        this.setState({show: true});
    }

    render() {
        const { show } = this.state;

        return (
            <Transition in={show} timeout={200} unmountOnExit>
                {(state) => {
                    const className = `transition-style transition-${state}`;

                    return (
                        <div className={className}>
                            <Jumbotron>
                                <Container>
                                    <h1>Building React.js User Interfaces</h1>
                                    <p>with Bootstrap and SASS.</p>
                                    <p>
                                        <Button className="btn btn-primary" href="http://02geek.com" target="_blank" />
                                        <Button className="btn btn-danger" target="_blank" />
                                    </p>
                                </Container>
                            </Jumbotron>
                        </div>
                    )
                }}
            </Transition>
        );
    }
}

export default App;