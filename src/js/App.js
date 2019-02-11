import React from 'react';
import {Transition} from 'react-transition-group';

import Button from './Button';
import Jumbotron from './Jumbotron';
import Container from './Container';


class App extends React.Component {
    state = {
        show: false,
        showButton: false
    };

    componentDidMount() {
        this.setState({show: true});
    }

    displayButton = () => {
        this.setState({showButton: true});
    };

    hideJumbotron = () => {
        this.setState({show: false});
    };

    renderExitButton = () => {
        return (
            <Transition in={this.state.showButton} timeout={200} unmountOnExit>
                {(state) => {
                    const className = `transition-style transition-${state}`;

                    return (
                        <div className={className}>
                            <Button className="btn btn-danger" onClick={this.hideJumbotron}>
                                Discover things!
                            </Button>
                        </div>
                    );
                }}
            </Transition>
            
        );
    };

    render() {
        const { show } = this.state;

        return (
            <Transition in={show} timeout={200}>
                {(state) => {
                    const className = `transition-style transition-${state}`;

                    return (
                        <div className={className}>
                            <Jumbotron>
                                <Container>
                                    <h1>Building React.js User Interfaces</h1>
                                    <p>with Bootstrap and SASS.</p>
                                    <Button className="btn btn-primary" onClick={this.displayButton}>
                                        Discover things!
                                    </Button>
                                    {this.renderExitButton()}
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