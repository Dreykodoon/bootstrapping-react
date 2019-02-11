import React from 'react';


export default (props) => {
    const Tag = props.href ? 'a' : 'button';
    const className = props.disabled ? `${props.className} disabled` : props.className;

    return (
        <Tag {...props} className={className}>
            {props.children}
        </Tag>
    );
};