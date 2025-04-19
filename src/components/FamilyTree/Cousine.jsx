import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousine = ({name, asset}) => {
    return (
        <div>
            <h4>{name}</h4>
            {
                name == 'mo mo' && <Special asset={asset}></Special>
            }
            {
                name == 'jhapsa' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousine;