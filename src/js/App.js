import React from 'react';

import Button from './Button';
import Jumbotron from './Jumbotron';
import Container from './Container';
import AppearTransition from './AppearTransition';


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
            <AppearTransition transIn={this.state.showButton} unmountOnExit>
                <Button className="btn btn-danger" onClick={this.hideJumbotron}>
                    Hide Jumbotron
                </Button>
            </AppearTransition>
        );
    };

    render() {
        const { show } = this.state;

        return (
            <AppearTransition transIn={this.state.show}>
                <Jumbotron>
                    <Container>
                        <h1>Building React.js User Interfaces</h1>
                        <p>with Bootstrap and SASS.</p>
                        <Button className="btn btn-primary" onClick={this.displayButton}>
                            Display Button
                        </Button>
                        {this.renderExitButton()}
                    </Container>
                </Jumbotron>
            </AppearTransition>
        );
    }
}

export default App;