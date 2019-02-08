import React from 'react';

import Button from './Button';
import Jumbotron from './Jumbotron';
import Container from './Container';


export default () => {
    return (
        <Jumbotron>
            <Container>
                <h1>Building React.js User Interfaces</h1>
                <p>with Bootstrap and SASS.</p>
                <p>
                    <Button className="btn btn-primary" href="http://02geek.com" target="_blank" disabled />
                    <Button className="btn btn-danger" target="_blank" disabled />
                </p>
            </Container>
        </Jumbotron>
        
    );
};