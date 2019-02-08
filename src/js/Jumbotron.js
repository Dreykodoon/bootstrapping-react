import React from 'react';

import '../img/forest.jpg';


export default (props) => {
    return (
        <div className="jumbotron jumbotron-fluid text-sm-center" style={{
            backgroundImage: "url(img/forest.jpg)",
            color: 'white'
            }}>
            {props.children}
        </div>
    );
};