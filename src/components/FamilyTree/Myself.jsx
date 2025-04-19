import React from 'react';
import Special from './Special';

const Myself = ( {asset}) => {
    return (
        <div>
            <h4>Myself</h4>
            <Special asset={asset}></Special>
        </div>
    );
};

export default Myself;