import React from 'react';

import '../img/forest.jpg';


export default (props) => {
    return (
        <div className="jumbotron jumbotron-fluid text-sm-center custom-jumbotron-styles">
            {props.children}
        </div>
    );
};