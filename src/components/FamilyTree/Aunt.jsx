import React, { use } from 'react';
import Cousine from './Cousine';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {
    const [money, setMoney] = use(MoneyContext);

    const handleAddMoney = () => {
        setMoney(money+200);
    }

    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousine asset={asset} name='mo mo'></Cousine>
                <Cousine name='lo lo'></Cousine>
            </section>
            <button onClick={handleAddMoney}>Add 200 tk</button>
        </div>
    );
};

export default Aunt;