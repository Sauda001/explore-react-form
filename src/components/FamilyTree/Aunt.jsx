import React from 'react';
import Cousine from './Cousine';

const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousine asset={asset} name='mo mo'></Cousine>
                <Cousine name='lo lo'></Cousine>
            </section>
        </div>
    );
};

export default Aunt;