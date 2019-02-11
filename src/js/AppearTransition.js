import React from 'react';
import {Transition} from 'react-transition-group';


export default ({transIn, unmountOnExit, children}) => {
    return (
        <Transition in={transIn} timeout={200} unmountOnExit={unmountOnExit}>
            {(state) => {
                const className = `transition transition-${state}`;

                return (
                    <div className={className}>
                        {children}
                    </div>
                );
            }}
        </Transition>
    );
};