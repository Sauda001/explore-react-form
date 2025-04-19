import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {
    const [money, setMoney] = use(MoneyContext)
    return (
        <div>
            <h4>Friend</h4>
            <h5>Family Got : {money}</h5>
        </div>
    );
};

export default Friend;