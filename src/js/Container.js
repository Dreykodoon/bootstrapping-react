import React from 'react';


export default (props) => {
    const className = props.fluid ? 'container-fluid' : 'container';

    return (
        <div className={className}>
            {props.children}
        </div>
    );
};