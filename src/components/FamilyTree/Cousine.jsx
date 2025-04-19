import React from 'react';
import Special from './Special';

const Cousine = ({name, asset}) => {
    return (
        <div>
            <h4>{name}</h4>
            {
                name == 'mo mo' && <Special asset={asset}></Special>
            }
        </div>
    );
};

export default Cousine;